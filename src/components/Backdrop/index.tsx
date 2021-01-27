import React, { FC } from 'react';

import './backdrop.scss';

interface BackdropProps {
  clickHandler: () => void;
}

export const Backdrop: FC<BackdropProps> = ({ clickHandler }) => {
  return <div className="backdrop" onClick={clickHandler}></div>;
};
