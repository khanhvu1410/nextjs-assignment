'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { FRONT_URL } from '@/constant/url';

const Header = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { data: categories, isLoading } = useCategories();

  return (
    <>
      {isLoading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}

      <header className="short-header">
        <div className="gradient-block"></div>
        <div className="row header-content">
          <div className="logo">
            <Link href={FRONT_URL.HOME}>Author</Link>
          </div>

          <nav id="main-nav-wrap">
            <ul className="main-navigation sf-menu">
              <li className="current">
                <Link href={FRONT_URL.HOME}>Home</Link>
              </li>
              <li
                className="has-children"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <Link href={FRONT_URL.CATEGORY_WITH_ID.replace(':id', 1)}>
                  Categories
                </Link>
                <ul
                  className="sub-menu"
                  style={{
                    display: isCategoriesOpen ? 'block' : 'none',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '200px',
                    background: '#f4f4f4',
                    borderRadius: '0 0 3px 3px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
                    zIndex: 1000,
                  }}
                >
                  {categories?.data.map((category) => {
                    return (
                      <li key={category.id}>
                        <Link
                          href={FRONT_URL.CATEGORY_WITH_ID.replace(
                            ':id',
                            category.id
                          )}
                        >
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
