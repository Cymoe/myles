import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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

interface PostListProps {
  posts: Post[]
}

export default function PostListComponent({ posts }: PostListProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.id}`}>
                  <span>{post.title.rendered}</span>
                </Link>
              </h3>
              <div 
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
              />
            </div>
          </div>
        ))}
      </div>
      <NewsletterSignup />
    </div>
  );
}

