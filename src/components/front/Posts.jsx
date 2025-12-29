import Pagination from '../shared/Pagination';
import PostCard from './PostCard';

const Posts = ({ posts, baseUrl, forCategory = false }) => {
  return (
    <section id="bricks" className={forCategory ? `with-top-sep` : ''}>
      <div className="row">
        <div className="bricks-wrapper">
          <div className="grid-sizer"></div>
          {posts.data.map((post) => {
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
              baseUrl={baseUrl}
            />
          </nav>
        </div>
      )}
    </section>
  );
};

export default Posts;
