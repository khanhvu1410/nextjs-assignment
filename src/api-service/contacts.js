import axiosInstance from '@/lib/axios-config';

export const submitContact = async (contactData) => {
  return axiosInstance.post('/contacts', contactData);
};

export const getContacts = async ({ page = 1, limit = 20 } = {}) => {
  return axiosInstance.get('/contacts', { params: { page, limit } });
};
