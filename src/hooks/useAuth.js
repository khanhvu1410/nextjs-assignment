import { login, logout } from '@/api-service/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success('Login successfully!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
