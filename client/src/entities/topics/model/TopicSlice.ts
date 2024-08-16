import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TopicsType } from '../types/topicsType';
import { TopicApi } from '../api/topicApi';

type initialStateType = TopicsType[];

const initialState: initialStateType = [];

export const getAllTopics = createAsyncThunk('topics/getAll', () =>
  TopicApi.getAllTopics()
);

const TopicSlice = createSlice({
  name: 'Topics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTopics.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default TopicSlice.reducer;
