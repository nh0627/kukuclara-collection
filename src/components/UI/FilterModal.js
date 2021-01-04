import React from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { filterDolls } from '../../actions';

let FilterModal = props => {
  const [open, setOpen] = React.useState(false);
  const { trigger, filters, handleSubmit } = props;
  const { types, hairColors, eyeColors, skinTypes } = filters;

  const loadCheckboxes = (type, index, filterKey) => {
    const { code, name } = type;
    return (
      <div className="field" key={index}>
        <div className="ui checkbox">
          <Field
            type="checkbox"
            component="input"
            label={name}
            name={`${filterKey}[${code}]`}
            value={code} />
          <label>{name}</label>
        </div>
      </div>
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
            {types.map((filter, i) => loadCheckboxes(filter, i, "types"))}
          </Form.Group>
          <Form.Group inline>
            <label>Hair Colors</label>
            {hairColors.map((filter, i) => loadCheckboxes(filter, i, "hairColors"))}
          </Form.Group>
          <Form.Group inline>
            <label>Eye Colors</label>
            {eyeColors.map((filter, i) => loadCheckboxes(filter, i, "eyeColors"))}
          </Form.Group>
          <Form.Group inline>
            <label>Skin Types</label>
            {skinTypes.map((filter, i) => loadCheckboxes(filter, i, "skinTypes"))}
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Close
        </Button>
        <Button color='green' form='filterForm' key='submit' htmltype='submit'>
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