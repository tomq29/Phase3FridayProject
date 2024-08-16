import { useCallback, useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../App/provider/store/store';
import { getAllTopics } from '../model/TopicSlice';
import TopicCard from './TopicsCard';

function TopicList(): JSX.Element {
  const dispatch = useAppDispatch();

  const AllTopicStore = useAppSelector((state) => state.AllTopicStore);

  useEffect(() => {
    if (AllTopicStore.length === 0) {
      dispatch(getAllTopics());
    }
  }, []);

  return (
    <div>
      {AllTopicStore.map((topicCard) => {
        return <TopicCard key={topicCard.id} topicCard={topicCard}></TopicCard>;
      })}
    </div>
  );
}

export default TopicList;
