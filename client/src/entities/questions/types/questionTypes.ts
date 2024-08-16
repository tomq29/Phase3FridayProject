import { TopicId } from '../../topics/types/topicsType';

export type QuestionsTypes = {
  id: number;
  question: string;
  correctAnswer: string;
  img:string,
  point: number;
  topicId: TopicId;
};
