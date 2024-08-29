// app/home/page.tsx
import React from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import PostList from '../../components/PostList';
import NewsletterSignup from '../../components/NewsletterSignup';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
};

export default async function HomePage() {
  const res = await axios.get<Post[]>('https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts');
  const posts = res.data;
  const featuredPosts = posts.slice(0, 3);
  const latestPosts = posts.slice(3, 6);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-5xl min-h-[calc(100vh-theme(spacing.32))]">
        
      <div className="mb-4 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-4 py-2 sm:py-4">
          <div className="w-full sm:w-auto flex justify-start">
            <Image
              src="/images/myles-3.png"
              alt="Myles Webb"
              width={140}
              height={140}
              className="w-36 h-36 sm:w-24 sm:h-24 rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-2 font-bold">I&apos;m Myles</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              I build & teach AI business at ModernHumanAI
            </p>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl">Learn AI skills today.</CardTitle>
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
            <li>I&apos;m the founder of ModernAI</li>
            <li>I teach AI business skills at <strong>ModernAI</strong></li>
            <li>I <strong>invest</strong> in AI driven startups</li>
            <li>I build and run remote companies</li>
            <li>Currently traveling full time (20 Countries)</li>
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
        <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
        <PostList posts={featuredPosts} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        <PostList posts={latestPosts} />
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

