// app/posts/[id]/page.tsx
import axios from 'axios';

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
};

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch the individual post by ID
  const res = await axios.get<Post>(`https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts/${id}`);
  const post = res.data;

  return (
    <article>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}

