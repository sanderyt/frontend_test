import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postMessage } from '../../lib/popup';
import { Popup } from '../../lib/types';

import { Inputfield } from '../Inputfield';
import { Button } from '../Button';

export const EditForm = () => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState<String | null>(null);

  const onSubmit = async (data: Popup) => {
    try {
      await postMessage(data.message, 0);
      setMessage('Succesfully posted');
    } catch (error) {
      setMessage('Something went wrong...');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Inputfield name="message" register={register} />
      <Button isPrimary>Send</Button>
      {message && message}
    </form>
  );
};
