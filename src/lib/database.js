import {
  CONTACTS_LIMIT,
  FEATURED_LIMIT,
  POSTS_LIMIT,
} from '@/constant/pagination-limit';

const posts = [
  {
    id: 1,
    categoryId: 1,
    slug: 'minimalism-never-goes-out-of-style',
    title: 'Minimalism Never Goes Out of Style',
    excerpt:
      'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Naruto Uzumaki',
    date: '2016-09-06',
    image: '/images/thumbs/featured/featured-1.jpg',
    format: 'standard',
    featured: true,
  },
  {
    id: 2,
    categoryId: 1,
    slug: 'enhancing-your-designs-with-negative-space',
    title: 'Enhancing Your Designs with Negative Space',
    excerpt:
      'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Sasuke Uchiha',
    date: '2016-08-29',
    image: '/images/thumbs/featured/featured-2.jpg',
    format: 'standard',
    featured: true,
  },
  {
    id: 3,
    categoryId: 1,
    slug: 'just-a-standard-format-post',
    title: 'Just a Standard Format Post',
    excerpt:
      'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'John Doe',
    date: '2016-08-15',
    image: '/images/thumbs/diagonal-building.jpg',
    format: 'standard',
  },
  {
    id: 4,
    slug: 'this-is-another-standard-format-post',
    title: 'This Is Another Standard Format Post',
    excerpt:
      'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Jane Smith',
    date: '2016-08-10',
    image: '/images/thumbs/ferris-wheel.jpg',
    format: 'standard',
  },
  {
    id: 5,
    categoryId: 1,
    slug: 'this-is-a-audio-format-post',
    title: 'This Is a Audio Format Post',
    excerpt:
      'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Music Lover',
    date: '2016-08-05',
    image: '/images/thumbs/concert.jpg',
    format: 'audio',
    audio: '/media/AirReview-Landmarks-02-ChasingCorporate.mp3',
  },
  {
    id: 6,
    categoryId: 2,
    slug: 'photography-skills-can-improve-your-graphic-design',
    title: 'Photography Skills Can Improve Your Graphic Design',
    excerpt:
      'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    content: 'Full article content here...',
    categoryName: 'Photography',
    author: 'Photography Expert',
    date: '2016-08-01',
    image: '/images/thumbs/shutterbug.jpg',
    format: 'standard',
  },
  {
    id: 7,
    categoryId: 4,
    slug: 'the-10-golden-rules-of-clean-simple-design',
    title: 'The 10 Golden Rules of Clean Simple Design',
    excerpt:
      'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.',
    content: 'Full article content here...',
    categoryName: 'Branding',
    author: 'Design Guru',
    date: '2016-07-28',
    image: '/images/thumbs/usaf-rocket.jpg',
    format: 'standard',
  },
  {
    id: 8,
    categoryId: 2,
    slug: 'modern-web-development-trends-2024',
    title: 'Modern Web Development Trends in 2024',
    excerpt:
      'Explore the latest trends in web development including React Server Components, edge computing, and AI integration.',
    content: 'Full article content here...',
    categoryName: 'HTML',
    author: 'Alex Johnson',
    date: '2024-01-15',
    image: '/images/thumbs/diagonal-pattern.jpg',
    format: 'standard',
    featured: true,
  },
  {
    id: 9,
    slug: 'the-art-of-typography-in-modern-design',
    title: 'The Art of Typography in Modern Design',
    excerpt:
      'Discover how typography can make or break your design and learn best practices for choosing the right fonts.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Emma Wilson',
    date: '2024-01-10',
    image: '/images/thumbs/liberty.jpg',
    format: 'standard',
  },
  {
    id: 10,
    categoryId: 3,
    slug: 'mastering-landscape-photography',
    title: 'Mastering Landscape Photography',
    excerpt:
      'Learn professional techniques for capturing breathtaking landscape photos in different lighting conditions.',
    content: 'Full article content here...',
    categoryName: 'Photography',
    author: 'Carlos Rivera',
    date: '2024-01-05',
    image: '/images/thumbs/lighthouse.jpg',
    format: 'gallery',
    gallery: [
      '/images/thumbs/gallery/work1.jpg',
      '/images/thumbs/gallery/work2.jpg',
      '/images/thumbs/gallery/work3.jpg',
    ],
  },
  {
    id: 11,
    categoryId: 5,
    slug: 'creating-realistic-mockups-in-figma',
    title: 'Creating Realistic Mockups in Figma',
    excerpt:
      'Step-by-step guide to creating professional product mockups that impress clients and stakeholders.',
    content: 'Full article content here...',
    categoryName: 'Mockups',
    author: 'Sarah Chen',
    date: '2023-12-20',
    image: '/images/thumbs/ottawa-bokeh.jpg',
    format: 'video',
    video: 'https://player.vimeo.com/video/14592941',
  },
  {
    id: 12,
    slug: 'brand-strategy-for-startups',
    title: 'Brand Strategy for Startups',
    excerpt:
      'Essential branding strategies that every startup should implement from day one.',
    content: 'Full article content here...',
    categoryName: 'Branding',
    author: 'Michael Rodriguez',
    date: '2023-12-15',
    image: '/images/thumbs/diagonal-building.jpg',
    format: 'standard',
  },
  {
    id: 13,
    categoryId: 1,
    slug: 'wordpress-security-best-practices',
    title: 'WordPress Security Best Practices',
    excerpt:
      'Protect your WordPress site from hackers with these essential security measures.',
    content: 'Full article content here...',
    categoryName: 'Wordpress',
    author: 'David Park',
    date: '2023-12-10',
    image: '/images/thumbs/ferris-wheel.jpg',
    format: 'standard',
  },
  {
    id: 14,
    slug: 'ui-animation-principles',
    title: 'UI Animation Principles',
    excerpt:
      'Learn how to use animation to enhance user experience without overwhelming users.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Lisa Wong',
    date: '2023-12-05',
    image: '/images/thumbs/concert.jpg',
    format: 'standard',
  },
  {
    id: 15,
    categoryId: 6,
    slug: 'building-a-consistent-brand-voice',
    title: 'Building a Consistent Brand Voice',
    excerpt:
      'How to develop and maintain a consistent brand voice across all communication channels.',
    content: 'Full article content here...',
    categoryName: 'Branding',
    author: 'Robert Kim',
    date: '2023-11-30',
    image: '/images/thumbs/shutterbug.jpg',
    format: 'audio',
    audio: '/media/branding-audio.mp3',
  },
  {
    id: 16,
    slug: 'responsive-design-patterns',
    title: 'Responsive Design Patterns for Modern Websites',
    excerpt:
      'Explore effective responsive design patterns that work across all device sizes.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Jennifer Lee',
    date: '2023-11-25',
    image: '/images/thumbs/usaf-rocket.jpg',
    format: 'standard',
    featured: true,
  },
  {
    id: 17,
    categoryId: 3,
    slug: 'night-photography-techniques',
    title: 'Night Photography Techniques',
    excerpt:
      'Master the art of night photography with these camera settings and composition tips.',
    content: 'Full article content here...',
    categoryName: 'Photography',
    author: "Kevin O'Brien",
    date: '2023-11-20',
    image: '/images/thumbs/diagonal-pattern.jpg',
    format: 'gallery',
    gallery: [
      '/images/thumbs/gallery/work1.jpg',
      '/images/thumbs/gallery/work2.jpg',
      '/images/thumbs/gallery/work3.jpg',
    ],
  },
  {
    id: 18,
    slug: 'the-future-of-web-design',
    title: 'The Future of Web Design',
    excerpt:
      'Predictions and trends shaping the future of web design in the coming years.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Maria Garcia',
    date: '2023-11-15',
    image: '/images/thumbs/liberty.jpg',
    format: 'video',
    video: 'https://player.vimeo.com/video/12345678',
  },
  {
    id: 19,
    categoryId: 4,
    slug: 'accessible-ui-design',
    title: 'Accessible UI Design Principles',
    excerpt:
      'Creating user interfaces that are accessible to everyone, regardless of ability.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Thomas Brown',
    date: '2023-11-10',
    image: '/images/thumbs/lighthouse.jpg',
    format: 'standard',
  },
  {
    id: 20,
    slug: 'optimizing-website-performance',
    title: 'Optimizing Website Performance',
    excerpt:
      'Techniques to improve your website loading speed and overall performance.',
    content: 'Full article content here...',
    categoryName: 'HTML',
    author: 'Olivia Taylor',
    date: '2023-11-05',
    image: '/images/thumbs/ottawa-bokeh.jpg',
    format: 'standard',
  },
  {
    id: 21,
    categoryId: 5,
    slug: '3d-mockup-design',
    title: '3D Mockup Design for Products',
    excerpt:
      'Learn how to create stunning 3D mockups for your product presentations.',
    content: 'Full article content here...',
    categoryName: 'Mockups',
    author: 'Daniel White',
    date: '2023-10-30',
    image: '/images/thumbs/diagonal-building.jpg',
    format: 'gallery',
    gallery: [
      '/images/thumbs/gallery/work1.jpg',
      '/images/thumbs/gallery/work2.jpg',
      '/images/thumbs/gallery/work3.jpg',
    ],
  },
  {
    id: 22,
    slug: 'color-psychology-in-design',
    title: 'Color Psychology in Design',
    excerpt: 'How different colors affect user behavior and decision making.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Sophia Clark',
    date: '2023-10-25',
    image: '/images/thumbs/ferris-wheel.jpg',
    format: 'standard',
  },
  {
    id: 23,
    categoryId: 1,
    slug: 'wordpress-gutenberg-guide',
    title: 'Complete Guide to WordPress Gutenberg',
    excerpt: 'Master the WordPress block editor with this comprehensive guide.',
    content: 'Full article content here...',
    categoryName: 'Wordpress',
    author: 'James Miller',
    date: '2023-10-20',
    image: '/images/thumbs/concert.jpg',
    format: 'standard',
  },
  {
    id: 24,
    slug: 'mobile-first-design-approach',
    title: 'Mobile-First Design Approach',
    excerpt: 'Why designing for mobile first leads to better user experiences.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Patricia Martinez',
    date: '2023-10-15',
    image: '/images/thumbs/shutterbug.jpg',
    format: 'audio',
    audio: '/media/mobile-design-audio.mp3',
  },
  {
    id: 25,
    categoryId: 3,
    slug: 'portrait-photography-lighting',
    title: 'Portrait Photography Lighting Techniques',
    excerpt: 'Professional lighting setups for stunning portrait photography.',
    content: 'Full article content here...',
    categoryName: 'Photography',
    author: 'Richard Davis',
    date: '2023-10-10',
    image: '/images/thumbs/usaf-rocket.jpg',
    format: 'standard',
  },
  {
    id: 26,
    slug: 'design-systems-fundamentals',
    title: 'Design Systems Fundamentals',
    excerpt: 'Building scalable design systems for large organizations.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Nancy Anderson',
    date: '2023-10-05',
    image: '/images/thumbs/diagonal-pattern.jpg',
    format: 'video',
    video: 'https://player.vimeo.com/video/23456789',
  },
  {
    id: 27,
    categoryId: 6,
    slug: 'rebranding-strategy',
    title: 'Rebranding Strategy for Established Companies',
    excerpt:
      'When and how to successfully rebrand your company without losing customers.',
    content: 'Full article content here...',
    categoryName: 'Branding',
    author: 'Charles Thompson',
    date: '2023-09-30',
    image: '/images/thumbs/liberty.jpg',
    format: 'standard',
    featured: true,
  },
  {
    id: 28,
    slug: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt:
      'A practical guide to choosing between CSS Grid and Flexbox for your layouts.',
    content: 'Full article content here...',
    categoryName: 'HTML',
    author: 'Barbara Harris',
    date: '2023-09-25',
    image: '/images/thumbs/lighthouse.jpg',
    format: 'standard',
  },
  {
    id: 29,
    categoryId: 5,
    slug: 'product-packaging-mockups',
    title: 'Creating Realistic Product Packaging Mockups',
    excerpt:
      'How to showcase your product packaging designs with realistic mockups.',
    content: 'Full article content here...',
    categoryName: 'Mockups',
    author: 'Steven Walker',
    date: '2023-09-20',
    image: '/images/thumbs/ottawa-bokeh.jpg',
    format: 'gallery',
    gallery: [
      '/images/thumbs/gallery/work1.jpg',
      '/images/thumbs/gallery/work2.jpg',
      '/images/thumbs/gallery/work3.jpg',
    ],
  },
  {
    id: 30,
    slug: 'user-research-methods',
    title: 'Essential User Research Methods',
    excerpt: 'Proven user research methods to understand your audience better.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Karen Young',
    date: '2023-09-15',
    image: '/images/thumbs/diagonal-building.jpg',
    format: 'standard',
  },
  {
    id: 31,
    categoryId: 1,
    slug: 'wordpress-ecommerce-solutions',
    title: 'WordPress E-commerce Solutions Comparison',
    excerpt:
      'Comparing WooCommerce, Shopify, and other e-commerce solutions for WordPress.',
    content: 'Full article content here...',
    categoryName: 'Wordpress',
    author: 'Donald King',
    date: '2023-09-10',
    image: '/images/thumbs/ferris-wheel.jpg',
    format: 'standard',
  },
  {
    id: 32,
    slug: 'design-inspiration-sources',
    title: 'Best Sources for Design Inspiration',
    excerpt: 'Curated list of websites and resources for design inspiration.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Susan Scott',
    date: '2023-09-05',
    image: '/images/thumbs/concert.jpg',
    format: 'link',
    link: 'https://designinspiration.com',
  },
  {
    id: 33,
    categoryId: 3,
    slug: 'macro-photography-tips',
    title: 'Macro Photography Tips and Tricks',
    excerpt: 'Capturing stunning close-up photos with minimal equipment.',
    content: 'Full article content here...',
    categoryName: 'Photography',
    author: 'Paul Green',
    date: '2023-08-30',
    image: '/images/thumbs/shutterbug.jpg',
    format: 'standard',
  },
  {
    id: 34,
    slug: 'dark-mode-design',
    title: 'Designing for Dark Mode',
    excerpt: 'Best practices for implementing dark mode in your applications.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Amanda Baker',
    date: '2023-08-25',
    image: '/images/thumbs/usaf-rocket.jpg',
    format: 'standard',
  },
  {
    id: 35,
    categoryId: 6,
    slug: 'logo-design-process',
    title: 'The Complete Logo Design Process',
    excerpt:
      'From research to final delivery: a complete logo design workflow.',
    content: 'Full article content here...',
    categoryName: 'Branding',
    author: 'Christopher Nelson',
    date: '2023-08-20',
    image: '/images/thumbs/diagonal-pattern.jpg',
    format: 'gallery',
    gallery: [
      '/images/thumbs/gallery/work1.jpg',
      '/images/thumbs/gallery/work2.jpg',
      '/images/thumbs/gallery/work3.jpg',
    ],
  },
  {
    id: 36,
    slug: 'javascript-frameworks-comparison',
    title: 'JavaScript Frameworks Comparison 2024',
    excerpt:
      'Comparing React, Vue, Angular, and Svelte for modern web development.',
    content: 'Full article content here...',
    categoryName: 'HTML',
    author: 'Rebecca Carter',
    date: '2023-08-15',
    image: '/images/thumbs/liberty.jpg',
    format: 'video',
    video: 'https://player.vimeo.com/video/34567890',
  },
  {
    id: 37,
    categoryId: 4,
    slug: 'microinteractions-in-ui',
    title: 'The Power of Microinteractions in UI',
    excerpt:
      'How small animations and interactions can significantly improve user experience.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Jason Mitchell',
    date: '2023-08-10',
    image: '/images/thumbs/lighthouse.jpg',
    format: 'standard',
  },
  {
    id: 38,
    slug: 'website-seo-fundamentals',
    title: 'Website SEO Fundamentals',
    excerpt: 'Essential SEO practices every website should implement.',
    categoryName: 'HTML',
    author: 'SEO Expert',
    date: '2023-08-05',
    image: '/images/thumbs/ottawa-bokeh.jpg',
    format: 'standard',
  },
  {
    id: 39,
    categoryId: 1,
    slug: 'wordpress-speed-optimization',
    title: 'WordPress Speed Optimization Guide',
    excerpt: 'Complete guide to making your WordPress site load faster.',
    categoryName: 'Wordpress',
    author: 'Performance Guru',
    date: '2023-07-30',
    image: '/images/thumbs/diagonal-building.jpg',
    format: 'standard',
  },
  {
    id: 40,
    slug: 'design-thinking-process',
    title: 'The Design Thinking Process',
    excerpt: 'Applying design thinking methodology to solve complex problems.',
    categoryName: 'Design',
    author: 'Design Thinker',
    date: '2023-07-25',
    image: '/images/thumbs/ferris-wheel.jpg',
    format: 'standard',
  },
  {
    id: 41,
    categoryId: 3,
    slug: 'urban-photography-guide',
    title: 'Urban Photography Guide',
    excerpt: 'Capturing the essence of city life through your lens.',
    content: 'Full article content here...',
    categoryName: 'Photography',
    author: 'Urban Explorer',
    date: '2023-07-20',
    image: '/images/thumbs/concert.jpg',
    format: 'standard',
  },
  {
    id: 42,
    slug: 'ui-ux-difference-explained',
    title: 'UI vs UX: The Difference Explained',
    excerpt:
      'Understanding the distinction between user interface and user experience design.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Design Philosopher',
    date: '2023-07-15',
    image: '/images/thumbs/shutterbug.jpg',
    format: 'standard',
  },
  {
    id: 43,
    categoryId: 5,
    slug: 'free-mockup-resources',
    title: 'Free Mockup Resources for Designers',
    excerpt: 'Curated list of high-quality free mockup templates.',
    content: 'Full article content here...',
    categoryName: 'Mockups',
    author: 'Resource Hunter',
    date: '2023-07-10',
    image: '/images/thumbs/usaf-rocket.jpg',
    format: 'link',
    link: 'https://freemockups.com',
  },
  {
    id: 44,
    categoryId: 6,
    slug: 'visual-identity-creation',
    title: 'Creating a Strong Visual Identity',
    excerpt: 'Building a cohesive visual identity for your brand.',
    content: 'Full article content here...',
    categoryName: 'Branding',
    author: 'Brand Architect',
    date: '2023-07-05',
    image: '/images/thumbs/diagonal-pattern.jpg',
    format: 'standard',
  },
  {
    id: 45,
    slug: 'css-best-practices',
    title: 'CSS Best Practices for Maintainable Code',
    excerpt: 'Writing CSS that is scalable and easy to maintain.',
    content: 'Full article content here...',
    categoryName: 'HTML',
    author: 'CSS Wizard',
    date: '2023-06-30',
    image: '/images/thumbs/liberty.jpg',
    format: 'standard',
  },
  {
    id: 46,
    categoryId: 1,
    slug: 'wordpress-plugins-must-have',
    title: 'Must-Have WordPress Plugins 2024',
    excerpt: 'Essential plugins for every WordPress website.',
    content: 'Full article content here...',
    categoryName: 'Wordpress',
    author: 'Plugin Expert',
    date: '2023-06-25',
    image: '/images/thumbs/lighthouse.jpg',
    format: 'standard',
  },
  {
    id: 47,
    slug: 'design-portfolio-tips',
    title: 'Creating an Impressive Design Portfolio',
    excerpt: 'Tips for showcasing your design work effectively.',
    content: 'Full article content here...',
    categoryName: 'Design',
    author: 'Portfolio Coach',
    date: '2023-06-20',
    image: '/images/thumbs/ottawa-bokeh.jpg',
    format: 'gallery',
    gallery: [
      '/images/thumbs/gallery/work1.jpg',
      '/images/thumbs/gallery/work2.jpg',
      '/images/thumbs/gallery/work3.jpg',
    ],
  },
  {
    id: 48,
    categoryId: 3,
    slug: 'product-photography-tips',
    title: 'Product Photography Tips for E-commerce',
    excerpt: 'Professional techniques for capturing products that sell.',
    content: 'Full article content here...',
    categoryName: 'Photography',
    author: 'E-commerce Pro',
    date: '2023-06-15',
    image: '/images/thumbs/diagonal-building.jpg',
    format: 'video',
    video: 'https://player.vimeo.com/video/45678901',
  },
  {
    id: 49,
    slug: 'design-feedback-process',
    title: 'Giving and Receiving Design Feedback',
    excerpt:
      'Constructive ways to provide and receive feedback on design work.',
    content: 'Full article content here...',
    categoryName: 'UI',
    author: 'Feedback Specialist',
    date: '2023-06-10',
    image: '/images/thumbs/ferris-wheel.jpg',
    format: 'audio',
    audio: '/media/feedback-audio.mp3',
  },
  {
    id: 50,
    categoryId: 6,
    slug: 'brand-storytelling',
    title: 'The Art of Brand Storytelling',
    excerpt:
      'Using narrative techniques to build emotional connections with your audience.',
    content: 'Full article content here...',
    categoryName: 'Branding',
    author: 'Storyteller',
    date: '2023-06-05',
    image: '/images/thumbs/concert.jpg',
    format: 'standard',
  },
];

const categories = [
  {
    id: 1,
    slug: 'wordpress',
    name: 'Wordpress',
    description: 'Wordpress tutorials and themes',
  },
  {
    id: 2,
    slug: 'html',
    name: 'HTML',
    description: 'HTML and web development',
  },
  {
    id: 3,
    slug: 'photography',
    name: 'Photography',
    description: 'Photography tips and tutorials',
  },
  {
    id: 4,
    slug: 'ui',
    name: 'UI',
    description: 'User Interface design',
  },
  {
    id: 5,
    slug: 'mockups',
    name: 'Mockups',
    description: 'Design mockups and templates',
  },
  {
    id: 6,
    slug: 'branding',
    name: 'Branding',
    description: 'Brand identity and strategy',
  },
];

const contacts = [];

// Simulate database with delay
export class Database {
  constructor() {
    this.posts = [...posts];
    this.categories = [...categories];
    this.contacts = [...contacts];
  }

  async delay(ms = 300) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Posts methods
  async getPosts({
    page = 1,
    limit = POSTS_LIMIT,
    categoryId = null,
    search = null,
  } = {}) {
    await this.delay();

    let filteredPosts = [...this.posts];

    // Filter by category
    if (categoryId) {
      filteredPosts = filteredPosts.filter(
        (post) => post.categoryId === categoryId
      );
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.content.toLowerCase().includes(searchLower)
      );
    }

    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Pagination
    const total = filteredPosts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return {
      data: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: total,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
        limit,
      },
    };
  }

  async getPostById(id) {
    await this.delay();
    return this.posts.find((post) => post.id === id) || null;
  }

  async getFeaturedPosts(limit = FEATURED_LIMIT) {
    await this.delay();
    return this.posts.filter((post) => post.featured).slice(0, limit);
  }

  // Categories methods
  async getCategories() {
    await this.delay();
    return this.categories;
  }

  async getCategoryById(id) {
    await this.delay();
    return this.categories.find((category) => category.id === id) || null;
  }

  // Contacts methods
  async addContact(contactData) {
    await this.delay();
    const newContact = {
      id: Date.now(),
      ...contactData,
      createdAt: new Date().toISOString(),
      status: 'unread',
    };
    this.contacts.push(newContact);
    return newContact;
  }

  async getContacts({ page = 1, limit = CONTACTS_LIMIT } = {}) {
    await this.delay();

    const total = this.contacts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;

    const paginatedContacts = this.contacts
      .slice(startIndex, startIndex + limit)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return {
      data: paginatedContacts,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: total,
        limit,
      },
    };
  }
}

export const db = new Database();
