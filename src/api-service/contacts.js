import { getApi } from '@/lib/axios-config';

export const submitContact = async (contactData) => {
  const api = getApi();
  return api.post('/contacts', contactData);
};

export const getContacts = async ({
  page = 1,
  limit = 20,
  accessToken,
} = {}) => {
  const api = getApi({
    server: true,
    accessToken: accessToken,
  });
  return api.get('/contacts', {
    params: { page, limit },
  });
};
