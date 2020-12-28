import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

const DollDetailModal = props => {
  const [open, setOpen] = React.useState(false);
  const { trigger, doll } = props;
  const { specialYn, img, name, type, series, date } = doll;

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size='small'
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={img} wrapped />
        <Modal.Description>
          <Header>{name} {type}</Header>
          <p>
            {series}
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DollDetailModal