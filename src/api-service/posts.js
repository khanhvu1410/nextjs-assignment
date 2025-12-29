import { POSTS_LIMIT } from '@/constant/pagination-limit';
import { getApi } from '@/lib/axios-config';

export const getPosts = async ({
  page = 1,
  limit = POSTS_LIMIT,
  categoryId,
  search,
  accessToken,
} = {}) => {
  const params = {
    page,
    limit,
    ...(categoryId && { categoryId }),
    ...(search && { search }),
  };
  const api = getApi({
    server: true,
    accessToken: accessToken,
  });
  return api.get('/posts', { params });
};

export const getPostById = async (id, accessToken) => {
  const api = getApi({
    server: true,
    accessToken: accessToken,
  });
  return api.get(`/posts/${id}`);
};

export const getFeaturedPosts = async (limit = 3, accessToken) => {
  const api = getApi({
    server: true,
    accessToken: accessToken,
  });
  return api.get('/posts', {
    params: { limit, featured: true },
  });
};
