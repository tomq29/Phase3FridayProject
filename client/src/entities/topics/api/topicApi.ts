import axiosInstance from '../../../../service/axiosInstance';
import { TopicId, TopicsType } from '../types/topicsType';

export class TopicApi {
  static getALlTopics = async () => {
    const { data } = await axiosInstance.get<TopicsType[]>('/topics');
    return data;
  };

  static getOneTopic = async (id: TopicId) => {
    const { data } = await axiosInstance.get<TopicsType>(`/topics/${id}`);
    return data;
  };
}
