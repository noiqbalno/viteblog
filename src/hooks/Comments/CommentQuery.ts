import { useQuery } from '@tanstack/react-query';
import { IComment } from '../../interfaces/IComment';
import { AxiosError } from 'axios';
import { getPostComments } from '../../api/Comments/CommentApi';

export const useFetchPostComments = (postId: string) => {
  const query = useQuery<IComment[], AxiosError>({
    queryKey: ['UserPosts', postId],
    queryFn: () => getPostComments(postId),
  });

  return query;
};
