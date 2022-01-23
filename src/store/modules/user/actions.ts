import {IUser} from './types';

export const GoogleLogin = (user: IUser) => {
  return {
    type: 'GOOGLE_LOGIN',
    payload: {
      ...user,
    },
  };
};

export const GoogleLogOut = () => {
  return {
    type: 'GOOGLE_LOGOUT',
    payload: {},
  };
};
