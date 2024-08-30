import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import NewsletterSignup from '@/components/NewsletterSignup';
import ClientPostList from '@/components/ClientPostList';
import { getPosts } from '@/lib/api';

export default async function HomePage() {
  const initialPosts = await getPosts();

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
        <ClientPostList initialPosts={initialPosts} />
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