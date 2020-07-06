import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.css';

const Backdrop = ({ showModal, toggleModal }) =>
  showModal ? <div className="Backdrop" onClick={toggleModal}></div> : null;

export default Backdrop;

Backdrop.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};
