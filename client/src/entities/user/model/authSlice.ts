import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../types/userTypes';
import { loginPassType } from '../types/authTypes';
import AuthApi from '../api/AuthApi';
import { setAccessToken } from '../../../../service/axiosInstance';

type authSliceType = {
  user: User | undefined;
  accesstoken: string;
};

const initialState: authSliceType = {
  // user: {
  //   id: 1,
  //   login: 'tom',
  //   maxScore: 300,
  // },
  user: undefined,

  accesstoken: '',
};

export const loginUser = createAsyncThunk(
  'user/login',
  (loginPass: loginPassType) => AuthApi.login(loginPass)
);

export const logoutUser = createAsyncThunk('user/logout', () =>
  AuthApi.logout()
);

export const regUser = createAsyncThunk(
  'user/reg',
  (loginPass: loginPassType) => AuthApi.reg(loginPass)
);

export const refreshTokens = createAsyncThunk('user/refresh', () =>
  AuthApi.refreshTokens()
);

const authSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      setAccessToken(action.payload.accessToken);
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      setAccessToken(action.payload.accessToken);
    });
    builder.addCase(regUser.fulfilled, (state, action) => {
      console.log(1);
      state.user = action.payload.user;
      setAccessToken(action.payload.accessToken);
    });
    builder.addCase(refreshTokens.fulfilled, (state, action) => {
     
      
      state.user = action.payload.user;
      setAccessToken(action.payload.accessToken);
    });
  },
});

export default authSlice.reducer;
