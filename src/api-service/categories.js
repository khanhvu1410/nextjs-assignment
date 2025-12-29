import { getApi } from '@/lib/axios-config';

export const getCategories = async (accessToken) => {
  const api = getApi({
    server: true,
    accessToken: accessToken,
  });
  return api.get('/categories');
};

export const getCategoryById = async (id, accessToken) => {
  const api = getApi({
    server: true,
    accessToken: accessToken,
  });
  return api.get(`/categories/${id}`);
};
