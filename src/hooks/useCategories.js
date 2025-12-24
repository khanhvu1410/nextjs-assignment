import { getCategories, getCategoryById } from '@/api-service/categories';
import { useQuery } from '@tanstack/react-query';

export const categoryQueryKeys = {
  categories: ['categories'],
  category: (id) => ['category', id],
};

export const useCategories = () => {
  return useQuery({
    queryKey: categoryQueryKeys.categories,
    queryFn: getCategories,
  });
};

export const useCategory = (id) => {
  return useQuery({
    queryKey: categoryQueryKeys.category(id),
    queryFn: () => getCategoryById(id),
    enabled: !!id,
  });
};
