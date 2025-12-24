'use client';

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <section id="bricks">
      <div className="row">
        <div className="bricks-wrapper">
          <div className="grid-sizer"></div>
          {Array.from({ length: count }).map((_, index) => (
            <div key={index} className="brick entry animate-this skeleton-post">
              <div className="entry-thumb skeleton-thumb"></div>
              <div className="entry-text skeleton-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links skeleton-category"></span>
                  </div>
                  <h1 className="entry-title skeleton-title"></h1>
                </div>
                <div className="entry-excerpt skeleton-excerpt"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skeleton-post {
          animation: pulse 1.5s ease-in-out infinite;
        }

        .skeleton-thumb {
          background: #e0e0e0;
          height: 200px;
          border-radius: 0;
        }

        .skeleton-text {
          background: #f5f5f5;
          padding: 1.8rem 2.8rem 3.6rem;
        }

        .skeleton-category {
          display: inline-block;
          width: 100px;
          height: 20px;
          background: #e0e0e0;
          margin-bottom: 1.2rem;
        }

        .skeleton-title {
          height: 28px;
          background: #e0e0e0;
          margin-bottom: 1.8rem;
        }

        .skeleton-excerpt {
          height: 60px;
          background: #e0e0e0;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default SkeletonLoader;
