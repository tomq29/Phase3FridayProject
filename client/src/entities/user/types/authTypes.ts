import { User } from './userTypes';

export type logEmailPassType = {
  login: string;
  password: string;
  confirm: string;
};

export type loginPassType = {
  login: string;
  password: string;
};

export type LogRegResponceType = {
  user: User;
  accessToken: string;
};


export type LogoutResponceType = {
    user: undefined;
    accessToken: string;
  };
  