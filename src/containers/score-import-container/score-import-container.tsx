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
import useScoresProvider from '@/hooks/use-scores-provider';
import ExcelDropzone, { type ExcelRowType } from '@/components/excel-dropzone';

const ScoreImportContainer = () => {
  const { addMultipleScores } = useScoresProvider()
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleOnDrop = (values: ExcelRowType[]): void => {
    addMultipleScores(values);
    onClose();
  };
  
  return (
    <>
      <Button onClick={onOpen}>Import scores</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" id="importScore">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Import scores</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ExcelDropzone label="Drop Your file here" onSheetDrop={handleOnDrop} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ScoreImportContainer;
