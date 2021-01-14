import React from "react";
import { Button, Header, Modal, Icon } from "semantic-ui-react";

const SemanticModal = props => {
  const [open, setOpen] = React.useState(false);
  const { trigger, children, header: { icon, content }, buttons } = props;

  const renderActionButtons = () => {
    const defaultCloseButton = (
      <Button color="black" onClick={() => setOpen(false)}>
        <Icon name="remove" /> Close
      </Button>
    );
    return buttons || defaultCloseButton;
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
      <Modal.Actions>
        {renderActionButtons()}
      </Modal.Actions>
    </Modal>
  )
}

export default SemanticModal;