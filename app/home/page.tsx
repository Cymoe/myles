import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <div className="container mx-auto px-4">
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
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm">
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
            ))}
          </div>
        ) : (
          <p>No posts found. Please try again later.</p>
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