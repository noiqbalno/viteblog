import axios from '../../config/endpoint';
import { IAlbum } from '../../interfaces/IAlbum';

export const getUserAlbums = async (userId: string): Promise<IAlbum[]> => {
  const res = await axios.get(`/users/${userId}/albums`);
  return res.data;
};

export const getSingleAlbum = async (id: string): Promise<IAlbum> => {
  const res = await axios.get(`/albums/${id}`);
  return res.data;
};
