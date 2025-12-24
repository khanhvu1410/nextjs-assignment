import { POSTS_LIMIT } from '@/constant/pagination-limit';
import axiosInstance from '@/lib/axios-config';

export const getPosts = async ({
  page = 1,
  limit = POSTS_LIMIT,
  categoryId,
  search,
} = {}) => {
  const params = {
    page,
    limit,
    ...(categoryId && { categoryId }),
    ...(search && { search }),
  };

  return axiosInstance.get('/posts', { params });
};

export const getPostBySlug = async (slug) => {
  return axiosInstance.get(`/posts/${slug}`);
};

export const getFeaturedPosts = async (limit = 3) => {
  return axiosInstance.get('/posts', {
    params: { limit, featured: true },
  });
};
