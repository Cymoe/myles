import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NewsletterSignup from '@/components/NewsletterSignup';
import ClientPostList from '@/components/ClientPostList';
import { getPosts } from '@/lib/api';

export default async function HomePage() {
  const initialPosts = await getPosts();

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-start justify-between mb-8 sm:mb-12">
        <div className="text-left mb-4 sm:mb-0">
          <div className="flex flex-col items-start sm:flex-row sm:items-end">
            <Image
              src="/images/myles-3.png"
              alt="Myles Kameron"
              width={120}
              height={120}
              className="rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl mb-1 sm:mb-2 font-bold">I&apos;m Myles</h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                I build & teach AI business at <Link href="https://modernhuman.co"><span className="underline">Modernhuman</span></Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl">Learn AI Business skills.</CardTitle>
          <CardDescription>Join 1,788 entrepreneurs and learn practical AI business skills and become a top 1% AI user.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-start gap-4">
            <Button asChild size="lg" className="w-44 h-14 text-base">
              <Link href="/courses">View Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-44 h-14 text-base">
              <Link href="/blog">Get Started</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Currently</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>I&apos;m the founder of Modernhuman</li>
            <li>I teach AI business skills at <Link href="https://remotebusinessmodels.com/"><span className="underline">Modernhuman</span></Link></li>
            <li>I build & <strong>invest</strong> in AI driven startups</li>
            <li>I build and run remote companies</li>
            <li>Currently traveling full time (25 Countries)</li>
          </ul>
        </CardContent>
        <CardHeader>
          <CardTitle>Background</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>College dropout — straight to work</li>
            <li>Built a 7-Fig commercial contracting company</li>
            <li>Worked at a design agency-learned to code</li>
            <li>Started hacking on Dev projects in 2018</li>
            <li>Began AI consulting for companies</li>
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