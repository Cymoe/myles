// app/blog/page.tsx
import axios from 'axios';
import PostList from '../../components/PostList';

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
};

export default async function HomePage() {
  const res = await axios.get<Post[]>('https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts');
  const posts = res.data;

  return (
    <div>
      <h2>Latest Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}
