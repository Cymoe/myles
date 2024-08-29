// components/PostItem.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
};

export default function PostItem({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title.rendered}</CardTitle>
      </CardHeader>
      <CardContent>
        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        <Button variant="outline" className="mt-4">
          <a href={`/posts/${post.id}`}>Read more</a>
        </Button>
      </CardContent>
    </Card>
  );
}

