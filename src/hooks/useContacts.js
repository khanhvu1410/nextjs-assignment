import { submitContact } from '@/api-service/contacts';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const contactQueryKeys = {
  contacts: (params) => ['contacts', params],
};

export const useSubmitContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      // Invalidate any related queries if needed
      queryClient.invalidateQueries(['contacts']);
    },
  });
};
