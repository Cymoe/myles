import axios from 'axios';

export type Post = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
};

export async function getPosts(page = 1, perPage = 6): Promise<Post[]> {
  try {
    console.log(`getPosts: Fetching page ${page} with ${perPage} posts per page`);
    const res = await axios.get<Post[]>(`https://wordpress-1322194-4833688.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&order=desc&orderby=date`);
    console.log(`getPosts: Fetched ${res.data.length} posts`);
    return res.data;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}
