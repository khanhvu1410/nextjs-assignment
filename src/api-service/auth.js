import axiosInstance from '@/lib/axios-config';

export const login = async (credentials) => {
  return axiosInstance.post('/login', credentials);
};

export const logout = async () => {
  return axiosInstance.post('/logout');
};
