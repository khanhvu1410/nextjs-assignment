/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/front/home',
        permanent: false,
      },
      {
        source: '/front',
        destination: '/front/home',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/admin/contacts',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
