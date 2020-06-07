import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const Modal = ({ children, showModal, toggleModal }) => (
  <>
    <Backdrop showModal={showModal} toggleModal={toggleModal} />
    <div
      className="Modal"
      style={{
        transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: showModal ? '1' : '0'
      }}
    >
      {children}
    </div>
  </>
);

export default Modal;
