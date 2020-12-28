import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const FilterModal = prop => {
  const [open, setOpen] = React.useState(false);
  const { trigger } = prop;

  return (
    <Modal
      closeIcon
      open={open}
      trigger={trigger}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='filter' content='Advanced filter' />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Close
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> OK
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default FilterModal;