import { Modal } from '@mantine/core';
import { QuestionsTypes } from '../types/questionTypes';
import { QuestionCard } from './QuestionCard';

type OneQuestionModalProps = {
  opened: boolean;
  question: QuestionsTypes | null; // Assuming QuestionType is the type for a question object
  close: () => void;
};

function OneQuestionModal({
  opened,
  question,
  close,
}: OneQuestionModalProps): JSX.Element {


  
  return (
    <>
      <Modal opened={opened} onClose={close} title={`Вопрос за ${question?.point}`}>


        {question?.question}

        <QuestionCard></QuestionCard>


      </Modal>
    </>
  );
}


export default OneQuestionModal;
