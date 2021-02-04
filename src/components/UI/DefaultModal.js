import React from "react";
import PropTypes from 'prop-types';
import { Button, Header, Modal, Icon } from "semantic-ui-react";

const DefaultModal = props => {
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

DefaultModal.propTypes = {
  trigger: PropTypes.object,
  children: PropTypes.object,
  header: PropTypes.object,
  actions: PropTypes.func,
  open: PropTypes.object,
  setOpen: PropTypes.func
};

export default DefaultModal;