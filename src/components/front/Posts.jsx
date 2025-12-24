'use client';

import { usePosts } from '@/hooks/usePosts';
import Pagination from '../shared/Pagination';
import PostCard from './PostCard';
import SkeletonLoader from '../shared/SkeletonLoader';

const Posts = ({ page, limit, categoryId = null, handlePageChange }) => {
  const { data: posts, isLoading } = usePosts(
    { page, limit, categoryId },
    {
      keepPreviousData: true,
    }
  );

  return (
    <>
      {isLoading ? (
        <SkeletonLoader count={limit} />
      ) : (
        <section id="bricks" className={categoryId && `with-top-sep`}>
          <div className="row">
            <div className="bricks-wrapper">
              <div className="grid-sizer"></div>
              {posts?.data.map((post) => {
                return <PostCard key={post.id} post={post} />;
              })}
            </div>
          </div>
          {posts?.pagination.totalPages > 1 && (
            <div className="row">
              <nav className="pagination">
                <Pagination
                  currentPage={posts?.pagination.currentPage}
                  totalPages={posts?.pagination.totalPages}
                  handlePageChange={handlePageChange}
                />
              </nav>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Posts;
