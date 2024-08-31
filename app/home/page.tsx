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
          <CardDescription className="text-[#8a8f98]">Join modern-day entrepreneurs and learn practical AI business skills <br/> and Join the Top 1% of AI-Driven Founders.</CardDescription>
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
            <li className="text-[#8a8f98]">Join the newsletter <Link href="#news"><span className="underline">here</span></Link></li>
            <li className="text-[#8a8f98]">I build and run remote companies</li>
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
      <div className="flex justify-center items-center mb-8">
        <Card className="max-w-xl w-full">
          <CardHeader className="mb-4">
            <CardTitle className="__className_f8a07c">Modernhuman</CardTitle>
          </CardHeader>
          <CardContent>
          <h1 className="mb-2"><strong>Become an AI powerhouse</strong></h1>
          <p style={{ color: 'rgb(75 85 99)' }}>Master Essential Skills and Become a Top 1% AI-Driven Founder. Accelerate Your Success as a Top AI User.</p>
            <div className="flex gap-4 mt-4">
              <Button asChild className="bg-transparent text-white border border-white hover:bg-white hover:text-black">
                <Link href="http://joinmodernhuman.com/">View Courses</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white text-black border border-black hover:bg-black hover:text-white">
                <Link href="/courses">Get Started</Link>
              </Button>
            </div>
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
          <CardTitle>
            <span class="text-2xl font-light __className_f8a07c">MK</span>
          </CardTitle>
          <h2>Read how to build AI-powered businesses and live a wealthy life.</h2>
          <CardDescription>Join 7231 readers staying updated on topics spanning AI, remote business, and modern wealth building:
          </CardDescription>
        </CardHeader>
        <CardContent id="news">
          <NewsletterSignup />
        </CardContent>
      </Card>
    </div>
  );
}