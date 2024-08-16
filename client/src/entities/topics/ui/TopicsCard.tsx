import { useState } from 'react';
import { Card, Text, SimpleGrid, UnstyledButton, Group } from '@mantine/core';
import classes from './ActionsGrid.module.css';
import { TopicsType } from '../types/topicsType';

function TopicCard({ topicCard }: { topicCard: TopicsType }): JSX.Element {

  const [disabledButtons, setDisabledButtons] = useState<{ [key: number]: boolean }>({});


  const handleButtonClick = (id: number) => {
    setDisabledButtons((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };


  const items = topicCard.Questions.map((question) => (
    <UnstyledButton
      key={question.id}
      className={classes.item}
      onClick={() => handleButtonClick(question.id)}
       disabled={disabledButtons[question.id]} 
      style={{ opacity: disabledButtons[question.id] ? 0.6 : 1 }} 
    >
      <Text size="lg">{question.point}</Text>
    </UnstyledButton>
  ));


  return (
    <div style={{ margin: 30 }}>
      <Card withBorder radius="md" className={classes.card}>
        <Group justify="space-between">
          <Text size="lg" className={classes.title}>{topicCard.topicsName}</Text> {/* название темы */}
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </div>
  );
}

export default TopicCard;
