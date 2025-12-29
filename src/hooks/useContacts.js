import { getContacts, submitContact } from '@/api-service/contacts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const contactQueryKeys = {
  contacts: (params) => ['contacts', params],
};

export const useSubmitContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      toast.success("Thanks for reaching out! We'll get back to you soon.");
      queryClient.invalidateQueries(['contacts']);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useContacts = (params = {}) => {
  return useQuery({
    queryKey: contactQueryKeys.contacts(params),
    queryFn: () => getContacts(params),
    keepPreviousData: true,
  });
};
