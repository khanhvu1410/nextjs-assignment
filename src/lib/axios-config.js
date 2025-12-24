import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('auth_token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      const message = error.response.data?.message || error.response.statusText;
      const status = error.response.status;

      if (status === 401) {
        console.error('Unauthorized access');
      }

      if (status === 404) {
        console.error('Resource not found');
      }

      return Promise.reject({
        message,
        status,
        data: error.response.data,
      });
    } else if (error.request) {
      return Promise.reject({
        message: 'Network error. Please check your connection.',
        status: 0,
      });
    } else {
      return Promise.reject({
        message: error.message,
        status: null,
      });
    }
  }
);

export default axiosInstance;
