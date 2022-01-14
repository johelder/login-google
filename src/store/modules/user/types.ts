export interface IUser {
  idToken: string;
  serverAuthCode: string;
  user: {
    email: string;
    id: string;
    photo: string;
    name: string;
  };
}

export interface IUserState {
  idToken: string;
  serverAuthCode: string;
  user: {
    email: string;
    id: string;
    photo: string;
    name: string;
  };
}
