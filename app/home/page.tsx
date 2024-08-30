"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import PostList from '@/components/PostList';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useInfiniteQuery } from '@tanstack/react-query';

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
};

export default function HomePage() {
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchPosts = async ({ pageParam = 1 }) => {
    try {
      console.log(`Fetching page ${pageParam}`);
      const res = await axios.get<Post[]>(
        `https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=6&order=desc&orderby=date&_embed&page=${pageParam}`,
        { timeout: 10000 }
      );
      console.log(`Fetched ${res.data.length} posts`);
      return res.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      setFetchError(error.message);
      throw error;
    }
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === 6 ? pages.length + 1 : undefined;
    },
    initialPageParam: 1,
    retry: 3,
    retryDelay: 1000,
  });

  useEffect(() => {
    console.log('Query state:', { isLoading, isError, error, data, fetchError });
  }, [isLoading, isError, error, data, fetchError]);

  const allPosts = data?.pages.flat() || [];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-2 font-bold">I&apos;m Myles</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            I build & teach AI business at <Link href="https://modernhuman.co"><span className="underline">Modernhuman</span></Link>
          </p>
        </div>
        <Image
          src="/images/profile.jpg"
          alt="Myles Kameron"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl">Learn AI Business today.</CardTitle>
          <CardDescription>Join 1,788 entrepreneurs and learn practical AI business skills and become a top 1% AI user.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dropped out of college</li>
            <li>Built a 7-figure business</li>
            <li>Building systems & software ever since</li>
          </ul>
        </CardContent>
      </Card>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        {isLoading ? (
          <p>Loading posts... Please wait.</p>
        ) : isError ? (
          <div>
            <p>Error loading posts: {error.message || fetchError}</p>
            <Button onClick={() => refetch()} className="mt-2">Try Again</Button>
          </div>
        ) : allPosts.length > 0 ? (
          <>
            <PostList posts={allPosts} />
            <div className="flex justify-center mt-6">
              <Button 
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? 'Loading more...'
                  : hasNextPage
                  ? 'Show More'
                  : 'No More Posts'}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <p>No posts found.</p>
        )}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Subscribe to Our Newsletter</CardTitle>
          <CardDescription>Stay updated with our latest content</CardDescription>
        </CardHeader>
        <CardContent>
          <NewsletterSignup />
        </CardContent>
      </Card>
    </div>
  );
}