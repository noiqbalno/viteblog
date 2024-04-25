import { QueryObserver, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  getPosts,
  getSinglePost,
  getSinglePostByUsers,
} from '../../api/Posts/PostApi';
import { IPost } from '../../interfaces/IPost';
import { useEffect, useState } from 'react';

export const useFetchPosts = () => {
  const query = useQuery<IPost[], AxiosError>({
    queryKey: ['Posts'],
    queryFn: () => getPosts(),
  });

  return query;
};

export const useFetchSinglePost = (id: string) => {
  const query = useQuery<IPost, AxiosError>({
    queryKey: ['Post', id],
    queryFn: () => getSinglePost(id),
  });

  return query;
};

export const useFetchUserPosts = (id: string) => {
  const query = useQuery<IPost[], AxiosError>({
    queryKey: ['UserPosts', id],
    queryFn: () => getSinglePostByUsers(id),
  });

  return query;
};

export const useGetPostsObserver = () => {
  const getPosts = useFetchPosts();

  const queryClient = useQueryClient();

  const [posts, setPosts] = useState<IPost[]>(() => {
    const data = queryClient.getQueryData<IPost[]>(['Posts']);
    return data ?? [];
  });

  useEffect(() => {
    const observer = new QueryObserver<IPost[]>(queryClient, {
      queryKey: ['Posts'],
    });

    const unsubscribe = observer.subscribe((result) => {
      if (result.data) setPosts(result.data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    ...getPosts,
    data: posts,
  };
};
