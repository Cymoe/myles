import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  console.log(`API route: Fetching page ${page}`);
  const posts = await getPosts(page);
  console.log(`API route: Fetched ${posts.length} posts`);

  return NextResponse.json(posts);
}
