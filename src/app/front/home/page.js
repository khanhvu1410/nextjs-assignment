'use client';

import Posts from '@/components/front/Posts';
import { useSearchParams, useRouter } from 'next/navigation';
import { POSTS_LIMIT } from '@/constant/pagination-limit';

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') || '1');
  const limit = POSTS_LIMIT;

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <Posts page={page} limit={limit} handlePageChange={handlePageChange} />
  );
}
