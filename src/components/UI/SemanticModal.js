import React from "react";
import { Button, Header, Modal, Icon } from "semantic-ui-react";

const SemanticModal = props => {
  const { trigger, children, header: { icon, content }, actions, open, setOpen } = props;

  const renderModalActions = () => {
    const defaultCloseButton = (
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Close
      </Button>
      </Modal.Actions>
    );
    return actions || defaultCloseButton;
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size="small"
      closeIcon
    >
      <Header icon={icon} content={content} />
      {children}
      {renderModalActions()}
    </Modal>
  )
}

export default SemanticModal;