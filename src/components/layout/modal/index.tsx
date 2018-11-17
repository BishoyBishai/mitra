import * as React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";

const AppModal = ({ open, header, body, onCancel, onConfirm }) => (
  <Modal open={open} >
    <Modal.Header>{header}</Modal.Header>
    <Modal.Content>{body}</Modal.Content>
    <Modal.Actions>
      <Button onClick={onCancel} color="red">
        <Icon name="remove" /> No
      </Button>
      <Button onClick={onConfirm} color="green">
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);

export default AppModal;
