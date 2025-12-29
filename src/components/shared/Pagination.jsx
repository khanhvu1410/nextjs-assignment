import Link from 'next/link';

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  forAdmin = false,
}) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className={forAdmin ? 'admin-pagination' : ''}>
      {currentPage > 1 ? (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="page-numbers prev"
        >
          Prev
        </Link>
      ) : (
        <span className="page-numbers prev inactive">Prev</span>
      )}

      {getPageNumbers().map((page) =>
        page === currentPage ? (
          <span key={page} className="page-numbers current">
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={`${baseUrl}?page=${page}`}
            className="page-numbers"
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages ? (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="page-numbers next"
        >
          Next
        </Link>
      ) : (
        <span className="page-numbers next inactive">Next</span>
      )}
    </div>
  );
}
