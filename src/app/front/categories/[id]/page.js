import { POSTS_LIMIT } from '@/constant/pagination-limit';
import { getPosts } from '@/api-service/posts';
import { getCategoryById } from '@/api-service/categories';
import Posts from '@/components/front/Posts';

export default async function CategoryPage({ params, searchParams }) {
  const categoryId = (await params).id;
  const page = (await searchParams).page || '1';
  const limit = POSTS_LIMIT;

  const posts = await getPosts({ page, limit, categoryId });
  const category = await getCategoryById(categoryId);

  return (
    <>
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: {category?.data.name}</h1>
          </div>
        </div>
      </section>
      <Posts
        posts={posts}
        baseUrl={`/front/categories/${categoryId}`}
        forCategory={true}
      />
      ;
    </>
  );
}
