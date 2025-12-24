'use-client';

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
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
    <>
      {currentPage > 1 ? (
        <button
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          className="page-numbers prev"
        >
          Prev
        </button>
      ) : (
        <span className="page-numbers prev inactive">Prev</span>
      )}

      {getPageNumbers().map((page) =>
        page === currentPage ? (
          <span key={page} className="page-numbers current">
            {page}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => {
              handlePageChange(page);
            }}
            className="page-numbers"
          >
            {page}
          </button>
        )
      )}

      {currentPage < totalPages ? (
        <button
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          className="page-numbers next"
        >
          Next
        </button>
      ) : (
        <span className="page-numbers next inactive">Next</span>
      )}
    </>
  );
}
