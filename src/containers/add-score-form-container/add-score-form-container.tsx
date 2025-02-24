import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { Button, useDisclosure } from '@northlight/ui';
import AddScoreForm, { type AddScoreFormValues } from '@/components/add-score-form';
import useScoresProvider from '@/hooks/use-scores-provider';

const AddScoreFormContainer = () => {
  const { addScore } = useScoresProvider()
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleOnFormSubmit = async (formValues: AddScoreFormValues): Promise<void> => {
    await addScore(formValues);
    onClose();
  };
  
  return (
    <>
      <Button onClick={onOpen} variant="brand">Add score</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add scores</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddScoreForm onSubmit={handleOnFormSubmit} onCancel={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddScoreFormContainer;
