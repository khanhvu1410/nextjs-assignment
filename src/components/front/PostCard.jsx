'use client';

import { FRONT_URL } from '@/constant/url';
import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <article className="brick entry format-standard animate-this">
      <div className="entry-thumb">
        <Link
          href={FRONT_URL.POSTS_WITH_ID.replace(':id', post.id)}
          className="thumb-link"
        >
          <img src={post.image} alt={post.title} />
        </Link>
      </div>

      <div className="entry-text">
        <div className="entry-header">
          <div className="entry-meta">
            <span className="cat-links">
              <Link
                href={FRONT_URL.CATEGORIES_WITH_ID.replace(
                  ':id',
                  post.categoryId
                )}
              >
                {post.categoryName}
              </Link>
            </span>
          </div>
          <h1 className="entry-title">
            <Link href={FRONT_URL.POSTS_WITH_ID.replace(':id', post.id)}>
              {post.title}
            </Link>
          </h1>
        </div>
        <div className="entry-excerpt">{post.excerpt}</div>
      </div>
    </article>
  );
}
