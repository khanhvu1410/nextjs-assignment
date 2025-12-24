'use client';

import { POSTS_LIMIT } from '@/constant/pagination-limit';
import { useCategory } from '@/hooks/useCategories';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Posts from '@/components/front/Posts';
import SkeletonLoader from '@/components/shared/SkeletonLoader';

export default function CategoryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();

  const { data: category, isLoading } = useCategory(id);

  const page = parseInt(searchParams.get('page') || '1');
  const limit = POSTS_LIMIT;

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      {isLoading && <SkeletonLoader />}
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: {category?.data.name}</h1>
          </div>
        </div>
      </section>
      <Posts
        page={page}
        limit={limit}
        categoryId={id}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
