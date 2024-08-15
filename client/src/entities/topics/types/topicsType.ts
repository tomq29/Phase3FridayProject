import { QuestionsTypes } from "../../questions/types/questionTypes";

export type TopicsType = {
  id: number;
  topicsName: string;
  questions: QuestionsTypes[];
};

export type TopicId = TopicsType['id'];

