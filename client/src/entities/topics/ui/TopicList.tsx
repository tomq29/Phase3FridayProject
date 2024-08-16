import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../App/provider/store/store';
import { getAllTopics } from '../model/TopicSlice';
import TopicCard from './TopicsCard';

function TopicList(): JSX.Element {

    const dispatch = useAppDispatch()

    const AllTopicStore = useAppSelector(state=> state.AllTopicStore)

    useEffect(() => {
        dispatch(getAllTopics())
    }, [])

    return (
        <div>
            {
                AllTopicStore.map(topicCard=> {
                    return(
                        <div key={topicCard.id}>
                        <TopicCard topicCard={topicCard}></TopicCard></div>
                    )
                } )
            }
        </div>
    );
}

export default TopicList;