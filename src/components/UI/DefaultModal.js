import React from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

const DefaultModal = props => {
  const [open, setOpen] = React.useState(false);
  const { trigger, children, header } = props;
  debugger;

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size="small"
      closeIcon
    >
      <Modal.Header>{header}</Modal.Header>
      {children}
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DefaultModal;