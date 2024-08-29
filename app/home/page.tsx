import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import PostList from '@/components/PostList';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import NewsletterSignup from '@/components/NewsletterSignup';

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

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-5xl min-h-[calc(100vh-theme(spacing.32))]">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-2 font-bold">I&apos;m Myles</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            I build & teach AI business at <Link href="https://modernhuman.co"><span className="underline">Modernhuman</span></Link>
          </p>
        </div>
        <Image
          src="/images/profile.jpg"
          alt="Myles Webb"
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
        {posts.length > 0 ? (
          <>
            <PostList posts={posts} />
            <div className="flex justify-center mt-6">
              <Button 
                variant="outline"
                className="flex items-center gap-2"
              >
                Show More <ChevronDown className="h-4 w-4" />
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