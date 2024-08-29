// app/blog/page.tsx
import axios from 'axios';
import Image from 'next/image';
import PostList from '../../components/PostList';

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
};

export default async function BlogPage() {
  // Fetch the latest posts from WordPress, including featured media
  const res = await axios.get<Post[]>('https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=9&order=desc&orderby=date&_embed');
  const posts = res.data;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <Image
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
