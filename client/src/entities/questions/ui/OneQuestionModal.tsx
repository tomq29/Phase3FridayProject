import {
  Button,
  Group,
  Image,
  Modal,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { QuestionsTypes } from '../types/questionTypes';

import { useState } from 'react';
import classes from './styles/FloatingLabelInput.module.css';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../App/provider/store/store';
import { updateScore, updateUserScore } from '../../user/model/authSlice';

type OneQuestionModalProps = {
  opened: boolean;
  question: QuestionsTypes | null; // Assuming QuestionType is the type for a question object
  close: () => void;
  setDisabledButtons: React.Dispatch<
    React.SetStateAction<{ [key: number]: boolean }>
  >;
};

function OneQuestionModal({
  opened,
  question,
  close,
  setDisabledButtons,
}: OneQuestionModalProps): JSX.Element {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.currentUserStore.user);

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const floating = value.trim().length !== 0 || focused || undefined;

  const handleAnswerSubmit = () => {
    if (question && currentUser) {
      if (
        question.correctAnswer.trim().toLowerCase() ===
        value.trim().toLowerCase()
      ) {
        const maxScore = currentUser.maxScore + question.point;
        dispatch(updateUserScore({ maxScore, userID: currentUser.id }));
        dispatch(updateScore(maxScore));
      } else {
        const maxScore = Math.max(0, currentUser.maxScore - question.point);
        dispatch(updateUserScore({ maxScore, userID: currentUser.id }));
        dispatch(updateScore(maxScore));
      }

      setValue('');
      setDisabledButtons((prevState) => ({
        ...prevState,
        [question.id]: true,
      }));
      close();
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        centered
        withCloseButton={false}
      >
        <Stack spacing="md">
          {question?.img && (
            <Image
              src={question.img}
              alt="Question image"
              fit="cover"
              radius="md"
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                objectFit: 'contain',
                margin: '0 auto',
              }}
            />
          )}

          <Title order={3} style={{ textAlign: 'center' }} mt="md">
            {question?.question}
          </Title>

          <TextInput
            label="Впишите ответ"
            placeholder="Ответ"
            required
            classNames={classes}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt="md"
            autoComplete="nope"
            data-floating={floating}
            labelProps={{ 'data-floating': floating }}
          />

          <Group mt="xs">
            <Button
              radius="md"
              onClick={() => handleAnswerSubmit(question)}
              style={{ flex: 1 }}
            >
              Проверить
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}

export default OneQuestionModal;
