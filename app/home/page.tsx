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
              <p className="text-base sm:text-lg text-muted-foreground text-[#8a8f98]">
                I build & teach AI business at <Link href="http://joinmodernhuman.com/"><span className="underline">Modernhuman</span></Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl">Learn AI Business skills.</CardTitle>
          <CardDescription>Join modern-day entrepreneurs and learn practical AI business skills and become a top 1% AI user.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-start gap-2 sm:gap-4">
            <Button asChild size="lg" className="w-1/2 sm:w-auto h-14 text-base">
              <Link href="/courses">View Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-1/2 sm:w-auto h-14 text-base">
              <Link href="http://joinmodernhuman.com/">Get Started</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8" id='about'>
        <CardHeader>
          <CardTitle>Currently</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li className="text-[#8a8f98]">I&apos;m the founder of Modernhuman</li>
            <li className="text-[#8a8f98]">I teach AI business at <Link href="http://joinmodernhuman.com/"><span className="underline">Modernhuman</span></Link></li>
            <li className="text-[#8a8f98]">I build and run <Link href="https://remotebusinessmodels.com/"><span className="underline">remote companies</span></Link></li>
            <li className="text-[#8a8f98]">Currently traveling full-time (25 Countries)</li>
          </ul>
        </CardContent>
        <CardHeader>
          <CardTitle>Background</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li className="text-[#8a8f98]">College dropout — straight to work</li>
            <li className="text-[#8a8f98]">Built a 7-Fig commercial contracting biz</li>
            <li className="text-[#8a8f98]">Worked at design agency-learned code</li>
            <li className="text-[#8a8f98]">Started hacking on Dev projects in 2017</li>
            <li className="text-[#8a8f98]">Began AI consulting for companies</li>
            <li className="text-[#8a8f98]">Building systems & software ever since</li>
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-light mt-20 mb-[-.5rem] font-sans text-center tracking-[0.25em] uppercase text-gray-600" id="resources">RESOURCES</h2>
      <h2 className="text-4xl font-bold font-sans text-center tracking-widest">A Path Forward</h2>
      <p className="text-center text-gray-600 mb-8">Discover key resources to embrace an autonomous, AI-powered lifestyle.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader className="mb-4">
            <CardTitle className="__className_f8a07c">Modernhuman</CardTitle>
          </CardHeader>
          <CardContent>
          <h1 className="mb-2"><strong>Become an AI powerhouse</strong></h1>
          <p style={{ color: 'rgb(75 85 99)' }}>Gain Practical Skills and Join the Top 1% of AI-Driven Founders</p>
            <Button asChild className="mt-4 bg-transparent text-white border border-white hover:bg-white hover:text-black">
              <Link href="http://joinmodernhuman.com/">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="mb-4">
            <CardTitle className="__className_f8a07c">AI Startup Ideas</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="mb-2"><strong>100+ AI Startup Ideas</strong></h1>
            <p style={{ color: 'rgb(75 85 99)' }}>Leverage Your AI Skills to Build a Successful AI-Driven Startup</p>
            <Button asChild className="mt-4 bg-transparent text-white border border-white hover:bg-white hover:text-black">
              <Link href="#">Free Download</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="mb-4">
            <CardTitle className="__className_f8a07c">Remote Models</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="mb-2"><strong>Unlock Location Freedom</strong></h1>
            <p style={{ color: 'rgb(75 85 99)' }}>Frameworks for Running Boring Businesses Remotely</p>
            <Button asChild className="mt-4 bg-transparent text-white border border-white hover:bg-white hover:text-black">
              <Link href="https://remotebusinessmodels.com/">Get Access</Link>
            </Button>
          </CardContent>
        </Card>
      </div>


      <section className="mb-8">
        <h2 className="text-2xl font-light mt-20 mb-[-.5rem] font-sans text-center tracking-[0.25em] uppercase text-gray-600">POSTS</h2>
        <h2 className="text-4xl font-bold font-sans text-center tracking-widest">Latest Updates</h2>
        <p className="text-center text-gray-600 mb-8">Explore my recent writings and insights.</p>
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