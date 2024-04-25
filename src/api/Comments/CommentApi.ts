import axios from '../../config/endpoint';
import { IComment, ICommentForm } from '../../interfaces/IComment';

export const getPostComments = async (postId: string): Promise<IComment[]> => {
  const res = await axios.get(`/posts/${postId}/comments`);
  return res.data;
};

export const createComment = async (commentData: ICommentForm) => {
  const create = await axios.post('/comments', commentData);
  return create.data;
};

export const removeComment = async ({
  commentData,
}: {
  commentData: IComment;
}) => {
  await axios.delete(`comments/${commentData.id}`);
  return commentData;
};

export const updateComment = async ({
  id,
  data,
}: {
  id: number;
  data: ICommentForm;
}) => {
  const update = await axios.put(`comments/${id}`, data);
  return update.data;
};
