import axios from '../../config/endpoint';
import { ICreatePost, IPost } from '../../interfaces/IPost';

export const getPosts = async (): Promise<IPost[]> => {
  const res = await axios.get(`/posts`);
  return res.data;
};

export const getSinglePost = async (id: string): Promise<IPost> => {
  const res = await axios.get(`/posts/${id}`);
  return res.data;
};

export const getSinglePostByUsers = async (
  userId: string
): Promise<IPost[]> => {
  const res = await axios.get(`/posts?userId=${userId}`);
  return res.data;
};

export const createPost = async (postData: ICreatePost) => {
  const create = await axios.post('/posts', postData);
  return create.data;
};

export const removePost = async ({ id }: { id: number }) => {
  await axios.delete(`posts/${id}`);
  return id;
};

export const updatePost = async ({
  id,
  data,
}: {
  id: number;
  data: ICreatePost;
}) => {
  const update = await axios.put(`posts/${id}`, data);
  return update.data;
};
