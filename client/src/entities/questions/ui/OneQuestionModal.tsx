import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';


function OneQuestionModal(): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* {oneQuestion.question} */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export default OneQuestionModal;
