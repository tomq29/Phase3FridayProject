import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/userTypes';

type authSliceType = {
  currentUser: User | undefined;
  accesstoken: string;
};

const initialState: authSliceType = {
  currentUser: {
    id: 1,
    login: 'tom',
    maxScore: 300,
  },
  accesstoken:'hello'
};

const authSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
});


export default authSlice.reducer