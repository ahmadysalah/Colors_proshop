import { IUser } from '../../redux/Auth/type';

export const useToken = () => {
  const token: IUser = JSON.parse(localStorage.getItem('user') || '{}') || {};
  console.log('useToken', token);
  return token;
};
