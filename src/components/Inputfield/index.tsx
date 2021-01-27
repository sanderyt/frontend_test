import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputfieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  error?: FieldError;
  register?: () => RefReturn;
};

import './inputfield.scss';
import { FieldError } from 'react-hook-form';

export const Inputfield: FC<InputfieldProps> = ({ name, error, register }) => {
  return (
    <div className="inputfield">
      <label>{name}</label>
      <input type="text" name={name} ref={register} />
      {error && error.message}
    </div>
  );
};
