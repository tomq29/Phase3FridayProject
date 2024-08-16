import axiosInstance from '../../../../service/axiosInstance';
import {
  loginPassType,
  LogoutResponceType,
  LogRegResponceType,
} from '../types/authTypes';

class AuthApi {
  static reg = async (loginPass: loginPassType) => {
    const { data } = await axiosInstance.post<LogRegResponceType>(
      '/auth/registration',
      loginPass
    );
    return data;
  };

  static login = async (loginPass: loginPassType) => {
    const { data } = await axiosInstance.post<LogRegResponceType>(
      '/auth/authorization',
      loginPass
    );
    return data;
  };

  static logout = async () => {
    const { data } = await axiosInstance.delete<LogoutResponceType>(
      '/auth/logout'
    );
    return data;
  };

  static refreshTokens = async () => {
    const { data } = await axiosInstance.get<LogRegResponceType>(
      '/tokens/refresh'
    );
    return data;
  };
}

export default AuthApi;
