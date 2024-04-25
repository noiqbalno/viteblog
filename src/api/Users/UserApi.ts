import axios from '../../config/endpoint';
import { IUser } from '../../interfaces/IUser';

export const findAllUsers = async (): Promise<IUser[]> => {
  const res = await axios.get(`/users`);
  return res.data;
};

export const getUserById = async (id: string): Promise<IUser> => {
  const res = await axios.get(`/users/${id}`);
  return res.data;
};
