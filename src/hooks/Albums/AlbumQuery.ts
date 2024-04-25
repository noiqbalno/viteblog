import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSingleAlbum, getUserAlbums } from '../../api/Album/AlbumApi';
import { IAlbum } from '../../interfaces/IAlbum';

export const useFetchUserAlbums = (userId: string) => {
  const query = useQuery<IAlbum[], AxiosError>({
    queryKey: ['UserAlbums', userId],
    queryFn: () => getUserAlbums(userId),
  });

  return query;
};

export const useFetchSingleAlbum = (id: string) => {
  const query = useQuery<IAlbum, AxiosError>({
    queryKey: ['Post', id],
    queryFn: () => getSingleAlbum(id),
  });

  return query;
};
