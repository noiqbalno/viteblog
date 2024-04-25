import { useQuery } from '@tanstack/react-query';
import { findAllUsers, getUserById } from '../../api/Users/UserApi';
import { IUser } from '../../interfaces/IUser';
import { AxiosError } from 'axios';

export const useFetchUsers = () => {
  const query = useQuery<IUser[], AxiosError>({
    queryKey: ['Users'],
    queryFn: () => findAllUsers(),
  });

  return query;
};

export const useFetchSingleUser = (id: string) => {
  const query = useQuery<IUser, AxiosError>({
    queryKey: ['User', id],
    queryFn: () => getUserById(id),
  });

  return query;
};
