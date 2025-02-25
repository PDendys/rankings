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
import AddScoreForm, { type AddScoreFormValuesType } from '@/components/add-score-form';
import useAppDataProvider from '@/hooks/use-app-data-provider';

const AddScoreFormContainer = () => {
  const { addScore } = useAppDataProvider()
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleOnFormSubmit = (formValues: AddScoreFormValuesType): void => {
    addScore(formValues);
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
