'use client';

import React, { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
};

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get<Post[]>(`https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=9&page=${pageParam}&order=desc&orderby=date&_embed`);
  return res.data;
};

export default function BlogPage() {
  const { ref, inView } = useInView();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    console.log("Client-side rendering initialized");
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
    isLoading,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === 9 ? pages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("Fetching next page");
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  useEffect(() => {
    console.log("Query status:", status);
    console.log("Is fetching:", isFetching);
    console.log("Is loading:", isLoading);
    console.log("Has next page:", hasNextPage);
    if (data) {
      console.log("Number of pages:", data.pages.length);
      console.log("Total posts:", data.pages.reduce((acc, page) => acc + page.length, 0));
    }
    if (error) console.error("Query error:", error);
  }, [status, isFetching, isLoading, hasNextPage, data, error]);

  if (!isClient) return <div>Loading...</div>;

  if (isLoading) return <div>Loading posts...</div>;
  if (status === 'error') {
    console.error('Error fetching posts:', error);
    return <div>Error fetching posts: {(error as Error).message}</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      {data && data.pages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.map((post) => (
                <div key={post.id} className="border rounded-lg overflow-hidden">
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <Image
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post.title.rendered}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div>No posts found</div>
      )}
      <div ref={ref} className="mt-8 text-center">
        {isFetchingNextPage ? 'Loading more...' : 'No more posts'}
      </div>
    </div>
  );
}
