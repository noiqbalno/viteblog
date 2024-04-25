import axios from '../../config/endpoint';
import { IPhoto } from '../../interfaces/IPhoto';

export const getAlbumPhotos = async (albumId: string): Promise<IPhoto[]> => {
  const res = await axios.get(`/albums/${albumId}/photos`);
  return res.data;
};
