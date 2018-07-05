import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';

const ModalForm = props => {
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.text}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.close}>Отмена</Button>
        <Button onClick={props.action} bsStyle="primary">Удалить</Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalForm.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default ModalForm;
