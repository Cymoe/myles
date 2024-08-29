// app/home/page.tsx
import React from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PostList from '../../components/PostList';
import NewsletterSignup from '../../components/NewsletterSignup';

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl min-h-[calc(100vh-theme(spacing.32))]">
        
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>I&apos;m Myles</CardTitle>
          <CardDescription>I build & teach AI business skills at ModernHumanAI</CardDescription>
        </CardHeader>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learn AI skills today.</CardTitle>
          <CardDescription>Join 1,788 builders on the best place on the internet to learn AI skills and become a top 1% AI user.</CardDescription>
        </CardHeader>
        <CardContent>
          <p></p>
          <Button 
            className="mt-4 mr-4 bg-background text-foreground border border-foreground hover:bg-background hover:text-foreground"
          >
            View Courses
          </Button>
          <Button className="mt-4">Join Modern AI</Button>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Now</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>I&apos;m the founder of ModernAI</li>
            <li>I teach AI business skills at <strong>ModernAI</strong></li>
            <li>I build & <strong>invest</strong> in AI driven startups</li>
            <li>I share tools & frameworks for modern-day business at <a href="https://remotebusinessmodels.com/" className="text-primary hover:underline">Remote Business Models</a></li>
            <li>Currently building while traveling full time</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Background</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>College dropout — straight to work</li>
            <li>Built and ran a commercial contracting company to 7 Figures</li>
            <li>Worked at a design agency and learned to code</li>
            <li>Started hacking on Dev projects in 2016</li>
            <li>Began AI consulting for companies</li>
            <li>Been building systems & software ever since</li>
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

