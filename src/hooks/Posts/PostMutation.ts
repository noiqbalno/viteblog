import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { createPost, removePost, updatePost } from '../../api/Posts/PostApi';
import { IPost } from '../../interfaces/IPost';

export const useCreatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onMutate: () => {
      toast.loading('Loading..');
    },
    onError: (error: AxiosError) => {
      toast.dismiss();
      toast.error(`Error ${error.response?.status}, Create data failed`);
    },
    onSuccess: (post: IPost) => {
      queryClient.setQueryData(['Posts'], (prevPosts: IPost[] | undefined) =>
        prevPosts ? [post, ...prevPosts] : [post]
      );
      toast.dismiss();
      toast.success('Data successfully created');
      setTimeout(() => {
        navigate('/post');
      }, 1000);
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removePost,
    onMutate: () => {
      toast.loading('Loading..');
    },
    onError: (error: AxiosError) => {
      toast.dismiss();
      toast.error(`Error ${error.response?.status}, Delete data failed`);
    },
    onSuccess: (id: number) => {
      queryClient.setQueryData(['Posts'], (prevPosts: IPost[] | undefined) =>
        prevPosts ? prevPosts.filter((post) => post.id !== id) : prevPosts
      );

      toast.dismiss();
      toast.success('Data successfully deleted');
    },
  });
};

export const useUpdatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onMutate: () => {
      toast.loading('Loading..');
    },
    onError: (error: AxiosError) => {
      toast.dismiss();
      toast.error(`Error ${error.response?.status}, Update data failed`);
    },
    onSuccess: (updatedPost: IPost) => {
      console.log('updatePostL ', updatedPost);
      queryClient.setQueryData(['Posts'], (prevPosts: IPost[] | undefined) => {
        if (prevPosts) {
          prevPosts.map((post) => {
            if (post.id === updatedPost.id) {
              console.log('yeee');
              post.title = updatedPost.title;
              post.body = updatedPost.body;
            }
            console.log('newpost: ', post);
            return post;
          });
        }
        console.log('return prev: ', prevPosts);
        return prevPosts;
      });

      toast.dismiss();
      toast.success('Data successfully updated');
      setTimeout(() => {
        navigate('/post');
      }, 1000);
    },
  });
};
