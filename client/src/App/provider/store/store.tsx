import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authSlice from '../../../entities/user/model/authSlice';
import TopicSlice from '../../../entities/topics/model/TopicSlice';
import OneTopicSlice from '../../../entities/topics/model/OneTopicSlice';

const store = configureStore({
  reducer: {
    currentUserStore: authSlice,
    AllTopicStore: TopicSlice,
    OneTopicStore: OneTopicSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
