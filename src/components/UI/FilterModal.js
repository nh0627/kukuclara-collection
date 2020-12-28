import React from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { filterDolls } from '../../actions';

let FilterModal = props => {
  const [open, setOpen] = React.useState(false);
  const { trigger, filters, handleSubmit } = props;
  const { types, hairColors, eyeColors, skinTypes } = filters;

  const loadCheckboxes = (type) => {
    const { code, name } = type;
    return (
      <Form.Checkbox key={code} label={name} value={code} />
    );
  };

  const onSubmit = (val) => {
    setOpen(false);
    // props.filterDolls(val);
  }

  // TODO: FORM GROUP ARRAY로 돌리기
  return (
    <Modal
      closeIcon
      open={open}
      trigger={trigger}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size='small'
    >
      <Header icon='filter' content='Advanced filter' />
      <Modal.Content>
        <Form id='filterForm' onSubmit={handleSubmit(onSubmit)}>
          <Form.Group inline>
            <label>Type</label>
            {types.map((type) => loadCheckboxes(type))}
          </Form.Group>
          <Form.Group inline>
            <label>Hair Colors</label>
            {hairColors.map((type) => loadCheckboxes(type))}
          </Form.Group>
          <Form.Group inline>
            <label>Eye Colors</label>
            {eyeColors.map((type) => loadCheckboxes(type))}
          </Form.Group>
          <Form.Group inline>
            <label>Skin Types</label>
            {skinTypes.map((type) => loadCheckboxes(type))}
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Close
        </Button>
        <Button color='green' form='filterForm' key='submit' htmlType='submit'>
          <Icon name='checkmark' /> OK
        </Button>
      </Modal.Actions>
    </Modal >
  )
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

FilterModal = reduxForm({ form: 'filterForm' })(FilterModal);

FilterModal = connect(mapStateToProps, { filterDolls })(FilterModal);

export default FilterModal;