import React, { FC, ReactNode } from 'react';

import { Backdrop } from '../Backdrop';

import './modal.scss';

interface ModalProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  clickHandler: () => void;
}

export const Modal: FC<ModalProps> = ({
  title,
  children,
  isOpen,
  clickHandler
}) => {
  return (
    <div className={isOpen ? 'modal modal--open' : 'modal'}>
      <Backdrop />
      <div className="modal__body">
        <div className="modal__header">
          <h3>{title}</h3>
          <div className="modal__close" onClick={clickHandler}>
            Close
          </div>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};
