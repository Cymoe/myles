// components/PostList.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

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

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Card key={post.id}>
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
          )}
          <CardHeader>
            <CardTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </CardHeader>
          <CardContent>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="mb-4" />
            <Button variant="outline">
              <Link href={`/posts/${post.id}`}>Read more</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

