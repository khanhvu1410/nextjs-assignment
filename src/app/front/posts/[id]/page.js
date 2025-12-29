import { FRONT_URL } from '@/constant/url';
import { getPostById } from '@/api-service/posts';
import Link from 'next/link';

export default async function PostPage({ params }) {
  const id = (await params).id;
  const post = await getPostById(id);

  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article className="format-standard">
            <div className="content-media">
              <div className="post-thumb">
                <img
                  src={post?.data.image}
                  alt={post?.data.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '500px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <div className="primary-content">
              <h1 className="page-title">{post?.data.title}</h1>
              <ul className="entry-meta">
                <li className="date">{post?.data.date}</li>
                <li className="cat">
                  <Link
                    href={FRONT_URL.CATEGORIES_WITH_ID.replace(
                      ':id',
                      post?.data.categoryId
                    )}
                  >
                    {post?.data.categoryName}
                  </Link>
                </li>
              </ul>
              <p className="lead">{post?.data.excerpt}</p>
              <div className="post-content">
                <div dangerouslySetInnerHTML={{ __html: post?.data.content }} />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
