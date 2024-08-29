'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import PostList from '../../components/PostList';
import NewsletterSignup from '../../components/NewsletterSignup';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

// This navigation array is not being used and can be removed
// The main navigation is defined in components/page-header.tsx

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
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  let fallbackPosts: Post[] = [
    { id: 1, title: { rendered: 'Sample Post 1' }, excerpt: { rendered: 'This is a sample post.' } },
    { id: 2, title: { rendered: 'Sample Post 2' }, excerpt: { rendered: 'This is another sample post.' } },
    // Add more sample posts as needed
  ];

  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const res = await axios.get<Post[]>('https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=6&order=desc&orderby=date&_embed');
        setPosts(res.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        // Fallback data
        setPosts([]);
      }
    };

    fetchInitialPosts();
  }, []);

  const loadMorePosts = async () => {
    try {
      const nextPage = page + 1;
      const res = await axios.get<Post[]>(`https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=6&order=desc&orderby=date&_embed&page=${nextPage}`);
      setPosts([...posts, ...res.data]);
      setPage(nextPage);
    } catch (error) {
      console.error('Failed to fetch more posts:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-5xl min-h-[calc(100vh-theme(spacing.32))]">
        
      <div className="mb-4 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 py-2 sm:py-4">
          <div className="w-full sm:w-auto flex justify-start">
            <Image
              src="/images/myles-3.png"
              alt="Myles Webb"
              width={120}  // Decreased from 140
              height={120}  // Decreased from 140
              className="w-32 h-32 sm:w-20 sm:h-20 rounded-lg object-cover"  // Decreased from w-36 h-36 sm:w-24 sm:h-24
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-2 font-bold">I&apos;m Myles</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              I build & teach AI business at <Link href="https://modernhuman.co"><span className="underline">Modernhuman</span></Link>
            </p>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl">Learn AI Business today.</CardTitle>
          <CardDescription>Join 1,788 entrepreneurs and learn practical AI business skills and become a top 1% AI user.</CardDescription>
        </CardHeader>
        <CardContent>
          <p></p>
          <Button 
            className="mt-4 mr-4 bg-background text-foreground border border-foreground hover:bg-background hover:text-foreground text-lg py-6 px-8"
          >
            View Courses
          </Button>
          <Button className="mt-4 text-lg py-6 px-8">Join Modern AI</Button>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>I&apos;m the founder of Modernhuman</li>
            <li>I teach AI business skills at <Link href="https://modernhuman.co"><span className="underline">Modernhuman</span></Link></li>
            <li>I <Link href="https://modernhuman.co"><span className="underline">invest</span></Link> in AI driven startups</li>
            <li>I build and run remote companies</li>
            <li>Currently traveling full time (25 Countries)</li>
          </ul>
        </CardContent>
        <CardHeader>
          <CardTitle>Background</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>College dropout — straight to work</li>
            <li>Built a 7-Fig commercial contracting biz</li>
            <li>Worked at a design agency-learned to code</li>
            <li>Started hacking on Dev projects in 2016</li>
            <li>Began AI consulting for companies</li>
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
                onClick={loadMorePosts}
                variant="outline"
                className="flex items-center gap-2"
              >
                Show More <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <p>Loading posts...</p>
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

