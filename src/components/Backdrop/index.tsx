import React, { FC } from 'react';

import './backdrop.scss';

interface BackdropProps {}

export const Backdrop: FC<BackdropProps> = ({}) => {
  return <div className="backdrop"></div>;
};
