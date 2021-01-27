import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Inputfield } from '../Inputfield';
import { Button } from '../Button';
import { postMessage } from '../../lib/popup';

export const EditForm = () => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState<String | null>(null);

  const onSubmit = async (data: any) => {
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
      <Button clickHandler={() => console.log('hi')} isPrimary>
        Send
      </Button>
      {message && message}
    </form>
  );
};
