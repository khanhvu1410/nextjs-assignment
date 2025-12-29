import { getFeaturedPosts, getPostById, getPosts } from '@/api-service/posts';
import { useQuery } from '@tanstack/react-query';

export const postQueryKeys = {
  posts: (params) => ['posts', params],
  post: (id) => ['post', id],
};

export const usePosts = (params = {}) => {
  return useQuery({
    queryKey: postQueryKeys.posts(params),
    queryFn: () => getPosts(params),
    keepPreviousData: true,
  });
};

export const usePost = (id) => {
  return useQuery({
    queryKey: postQueryKeys.post(id),
    queryFn: () => getPostById(id),
    enabled: !!id,
  });
};

export const useFeaturedPosts = (limit = 3) => {
  return useQuery({
    queryKey: postQueryKeys.featuredPosts,
    queryFn: () => getFeaturedPosts(limit),
  });
};
