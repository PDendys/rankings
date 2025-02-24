import React from 'react';
import { Form, TextField, NumberInputField, Button, Box, Flex } from '@northlight/ui';

export type AddScoreFormValues = {
  name: string;
  score: number;
}

type AddScoreFormProps = {
  onSubmit: (formValues: AddScoreFormValues) => void;
  onCancel: () => void;
}

const AddScoreForm = ({ onSubmit, onCancel }: AddScoreFormProps) => {
  return (
    <Form initialValues={{ name: '', score: 0 }} onSubmit={onSubmit}>
      <Box mb={2}>
        <TextField name="name" label="User's name" isRequired />
      </Box>
      <Box mb={4}>
        <NumberInputField name="score" label="Score" isRequired />
      </Box>
      <Flex justify="flex-end">
        <Button mr={4} variant="ghost" onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="brand">Add score</Button>
      </Flex>
    </Form>
  )
}

export default AddScoreForm;
