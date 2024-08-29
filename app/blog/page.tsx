import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    const res = await axios.get<Post[]>('https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=9&order=desc&orderby=date&_embed');
    return res.data;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>
                  <Link href={`/posts/${post.id}`}>
                    <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <Image
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                )}
                <div 
                  className="text-sm text-muted-foreground mb-4"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Button variant="outline">
                  <Link href={`/posts/${post.id}`}>Read more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>No posts found. Please try again later.</div>
      )}
    </>
  );
}
