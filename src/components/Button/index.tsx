import React, { FC } from 'react';

import './button.scss';

interface ButtonProps {
  children: string;
  isPrimary: boolean;
  clickHandler?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  isPrimary,
  clickHandler
}) => {
  const primaryStyle = isPrimary && `btn--primary`;
  const classes = `btn ${primaryStyle}`;
  return (
    <button className={classes} type="submit" onClick={clickHandler}>
      {children}
    </button>
  );
};
