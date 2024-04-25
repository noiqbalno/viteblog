import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
  createComment,
  removeComment,
  updateComment,
} from '../../api/Comments/CommentApi';
import { IComment } from '../../interfaces/IComment';
import { IPost } from '../../interfaces/IPost';

export const useCreateComment = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onMutate: () => {
      toast.loading('Loading..');
    },
    onError: (error: AxiosError) => {
      toast.dismiss();
      toast.error(`Error ${error.response?.status}, Failed adding comment`);
    },
    onSuccess: (comment: IComment) => {
      queryClient.setQueryData(
        ['PostComments', comment.postId.toString()],
        (prevComments: IComment[] | undefined) =>
          prevComments ? [comment, ...prevComments] : [comment]
      );
      toast.dismiss();
      toast.success('Comment added successfully');
      setTimeout(() => {
        navigate(`/post/detail/${comment.postId}`);
      }, 1000);
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeComment,
    onMutate: () => {
      toast.loading('Loading..');
    },
    onError: (error: AxiosError) => {
      toast.dismiss();
      toast.error(`Error ${error.response?.status}, Delete comment failed`);
    },
    onSuccess: (deletedComment: IComment) => {
      queryClient.setQueryData(
        ['PostComments', deletedComment.postId.toString()],
        (prevComments: IPost[] | undefined) =>
          prevComments
            ? prevComments.filter((comment) => comment.id !== deletedComment.id)
            : prevComments
      );

      toast.dismiss();
      toast.success('Data successfully deleted');
    },
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,
    onMutate: () => {
      toast.loading('Loading..');
    },
    onError: (error: AxiosError) => {
      toast.dismiss();
      toast.error(`Error ${error.response?.status}, Edit comment failed`);
    },
    onSuccess: (updatedComment: IComment) => {
      queryClient.setQueryData(
        ['PostComments', updatedComment.postId.toString()],
        (prevComments: IComment[] | undefined) => {
          if (prevComments) {
            prevComments.map((comment) => {
              if (comment.id === updatedComment.id) {
                comment.email = updatedComment.email;
                comment.body = updatedComment.body;
                comment.name = updatedComment.name;
              }
              return comment;
            });
          }
          return prevComments;
        }
      );

      toast.dismiss();
      toast.success('Data successfully updated');
    },
  });
};
