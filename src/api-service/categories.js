import axiosInstance from '@/lib/axios-config';

export const getCategories = async () => {
  return axiosInstance.get('/categories');
};

export const getCategoryById = async (id) => {
  return axiosInstance.get(`/categories/${id}`);
};
