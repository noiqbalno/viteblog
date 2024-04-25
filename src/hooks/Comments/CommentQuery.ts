import { QueryObserver, useQuery, useQueryClient } from '@tanstack/react-query';
import { IComment } from '../../interfaces/IComment';
import { AxiosError } from 'axios';
import { getPostComments } from '../../api/Comments/CommentApi';
import { useEffect, useState } from 'react';

export const useFetchPostComments = (postId: string) => {
  const query = useQuery<IComment[], AxiosError>({
    queryKey: ['PostComments', postId],
    queryFn: () => getPostComments(postId),
  });

  return query;
};

export const useGetCommentsObserver = (postId: string) => {
  const getComments = useFetchPostComments(postId);

  const queryClient = useQueryClient();

  const [comments, setComments] = useState<IComment[]>(() => {
    const data = queryClient.getQueryData<IComment[]>(['PostComments', postId]);
    return data ?? [];
  });

  useEffect(() => {
    const observer = new QueryObserver<IComment[]>(queryClient, {
      queryKey: ['PostComments', postId],
    });

    const unsubscribe = observer.subscribe((result) => {
      if (result.data) setComments(result.data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    ...getComments,
    data: comments,
  };
};
