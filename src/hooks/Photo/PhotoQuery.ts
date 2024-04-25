import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getAlbumPhotos } from '../../api/Photo/PhotoApi';
import { IPhoto } from '../../interfaces/IPhoto';

export const useFetchAlbumPhotos = (albumId: string) => {
  const query = useQuery<IPhoto[], AxiosError>({
    queryKey: ['UserAlbums', albumId],
    queryFn: () => getAlbumPhotos(albumId),
  });

  return query;
};
