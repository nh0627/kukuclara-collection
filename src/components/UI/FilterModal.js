import React from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { filterDolls } from '../../actions';

let FilterModal = props => {
  const [open, setOpen] = React.useState(false);
  const { trigger, filters, handleSubmit } = props;
  const { types, hairColorGroups, eyeColorGroups, skinTypes } = filters;

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

  const onSubmit = value => {
    setOpen(false);

    const parsedData = {};
    const checkboxGroups = Object.keys(value);

    checkboxGroups.forEach(groupName => {
      const checkboxes = value[groupName];
      // Filter checkboxes' value only if it is true
      const selectedValues = Object.keys(checkboxes).filter(box => checkboxes[box]);
      if (selectedValues.length > 0) parsedData[groupName] = selectedValues;
    });
    
    props.filterDolls(parsedData);
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
            {hairColorGroups.map((filter, i) => loadCheckboxes(filter, i, "hairColorGroups"))}
          </Form.Group>
          <Form.Group inline>
            <label>Eye Colors</label>
            {eyeColorGroups.map((filter, i) => loadCheckboxes(filter, i, "eyeColorGroups"))}
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