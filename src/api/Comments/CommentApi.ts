import axios from '../../config/endpoint';
import { IComment } from '../../interfaces/IComment';

export const getPostComments = async (postId: string): Promise<IComment[]> => {
  const res = await axios.get(`/posts/${postId}/comments`);
  return res.data;
};
