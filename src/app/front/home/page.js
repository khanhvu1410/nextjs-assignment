import { POSTS_LIMIT } from '@/constant/pagination-limit';
import { getPosts } from '@/api-service/posts';
import Posts from '@/components/front/Posts';

export default async function HomePage({ searchParams }) {
  const page = (await searchParams).page || '1';
  const limit = POSTS_LIMIT;
  const posts = await getPosts({ page, limit });

  return <Posts posts={posts} baseUrl="/front/home" />;
}
