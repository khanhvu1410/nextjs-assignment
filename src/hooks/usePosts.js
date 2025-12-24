import { getFeaturedPosts, getPostBySlug, getPosts } from '@/api-service/posts';
import { useQuery } from '@tanstack/react-query';

export const postQueryKeys = {
  posts: (params) => ['posts', params],
  post: (slug) => ['post', slug],
};

export const usePosts = (params = {}) => {
  return useQuery({
    queryKey: postQueryKeys.posts(params),
    queryFn: () => getPosts(params),
    keepPreviousData: true, // Smooth pagination
  });
};

export const usePost = (slug) => {
  return useQuery({
    queryKey: postQueryKeys.post(slug),
    queryFn: () => getPostBySlug(slug),
    enabled: !!slug, // Only run if slug exists
  });
};

export const useFeaturedPosts = (limit = 3) => {
  return useQuery({
    queryKey: postQueryKeys.featuredPosts,
    queryFn: () => getFeaturedPosts(limit),
  });
};
