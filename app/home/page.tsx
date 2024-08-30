"use client";
import React, { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import PostList from '@/components/PostList';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useState } from 'react';
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

async function getPosts() {
  try {
    const res = await axios.get<Post[]>('https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=6&order=desc&orderby=date&_embed');
    return res.data;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

export default function HomePage() {
  const fetchPosts = async ({ pageParam = 1 }) => {
    const res = await axios.get<Post[]>(`https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=6&order=desc&orderby=date&_embed&page=${pageParam}`);
    return res.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === 6 ? pages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const allPosts = data?.pages.flat() || [];

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error loading posts. Please try again later.</div>;

  return (
    <>
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
        {allPosts.length > 0 ? (
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
    </>
  );
}