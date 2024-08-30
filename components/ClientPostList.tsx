'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Post } from '@/lib/api';

function truncateToSentences(text: string, maxSentences: number = 2): string {
  const strippedText = text.replace(/<\/?[^>]+(>|$)/g, "");
  const sentences = strippedText.match(/[^\.!\?]+[\.!\?]+/g) || [];
  return sentences.slice(0, maxSentences).join(' ').trim();
}

export default function ClientPostList({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const nextPage = page + 1;
      console.log(`Fetching page ${nextPage}`);
      const res = await axios.get<Post[]>(`/api/posts?page=${nextPage}`);
      console.log('API response:', res.data);
      if (res.data.length === 0) {
        setHasMore(false);
        console.log('No more posts to load');
      } else {
        setPosts(prevPosts => [...prevPosts, ...res.data]);
        setPage(nextPage);
        console.log(`Loaded ${res.data.length} more posts`);
        // Check if we've reached the end of available posts
        if (res.data.length < 6) { // Assuming we're fetching 6 posts per page
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error('Failed to fetch more posts:', error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/posts/${post.id}`}>
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>
              </h3>
              <div className="text-sm text-gray-600 mb-2">
                <p>{truncateToSentences(post.excerpt.rendered)}</p>
              </div>
              <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline text-sm">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="mt-8 text-center">
          <Button 
            onClick={loadMorePosts} 
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {loading ? 'Loading...' : 'Show more'}
          </Button>
        </div>
      )}
    </>
  );
}
