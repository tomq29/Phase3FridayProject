import { useState } from 'react';
import { Card, Text, SimpleGrid, UnstyledButton, Group } from '@mantine/core';
import classes from './ActionsGrid.module.css';
import { TopicsType } from '../types/topicsType';
import { useDisclosure } from '@mantine/hooks';

import OneQuestionModal from '../../questions/ui/OneQuestionModal';
import { QuestionsTypes } from '../../questions/types/questionTypes';

function TopicCard({ topicCard }: { topicCard: TopicsType }): JSX.Element {
  const [disabledButtons, setDisabledButtons] = useState<{
    [key: number]: boolean;
  }>({});

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedQuestion, setSelectedQuestion] =
    useState<QuestionsTypes | null>(null);

  const handleButtonClick = (question: QuestionsTypes) => {
    setSelectedQuestion(question);
    // setDisabledButtons((prevState) => ({
    //   ...prevState,
    //   [question.id]: true,
    // }));
    open();
  };

  const items = topicCard.Questions.map((question) => (
    <UnstyledButton
      key={question.id}
      className={classes.item}
      onClick={() => handleButtonClick(question)}
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
          <Text size="lg" className={classes.title}>
            Тема: {topicCard.topicsName}
          </Text>{' '}
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
      <OneQuestionModal
        opened={opened}
        question={selectedQuestion}
        close={close}
      ></OneQuestionModal>
    </div>
  );
}

export default TopicCard;
