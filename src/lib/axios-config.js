import axios from 'axios';

export function getApi({ server = false, accessToken } = {}) {
  const baseURL = server ? process.env.API_BASE : '/api';
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken ? { 'Access-Token': accessToken } : {}),
    },
    withCredentials: true, // only used by browser requests for cross-site cookies
  });

  instance.interceptors.response.use(
    (res) => res.data,
    (err) => {
      err.message =
        err.response?.data?.message || err.message || 'Unknown error';
      return Promise.reject(err);
    }
  );

  return instance;
}
