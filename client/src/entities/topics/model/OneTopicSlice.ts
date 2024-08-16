import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TopicId, TopicsType } from '../types/topicsType';
import { TopicApi } from '../api/topicApi';

const initialState: TopicsType = {
  id: 0,
  topicsName: '',
  questions: [],
};

export const getOneTopic = createAsyncThunk('topics/getOne', (id: TopicId) =>
  TopicApi.getOneTopic(id)
);

const OneTopicSlice = createSlice({
  name: 'Topics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOneTopic.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export default OneTopicSlice.reducer;
