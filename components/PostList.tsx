import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  console.log(`PostList received ${posts.length} posts`);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => {
        console.log(`Rendering post ${post.id}:`, post);
        return (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <Image
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/posts/${post.id}`}>
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>
              </h3>
              <div
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

