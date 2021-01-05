import React from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { filterDolls } from '../../actions';
import { FILTERS as checkboxGroups } from '../../common/util';

let FilterModal = props => {
  const [open, setOpen] = React.useState(false);
  const { trigger, filters, handleSubmit } = props;

  const loadCheckboxes = (checkboxGroup, index) => {
    const loadCheckboxField = ({ filter, i }) => {
      const { code, name } = filter;
      return (
        <div className="field" key={i}>
          <div className="ui checkbox">
            <Field
              type="checkbox"
              component="input"
              label={name}
              name={`${checkboxGroup}[${code}]`}
              value={code} />
            <label>{name}</label>
          </div>
        </div>
      )
    };

    return (
      <Form.Group inline key={index}>
        <label>{checkboxGroup}</label>
        {filters[checkboxGroup].map((filter, i) => loadCheckboxField({ filter, i }))}
      </Form.Group>
    );
  };

  const onSubmit = data => {
    setOpen(false);

    const parsedData = {};
    const submitDataKeys = Object.keys(data);

    submitDataKeys.forEach(key => {
      const submitValue = data[key];
      // If the fields are checkboxes
      if (checkboxGroups.indexOf(key) > -1) {
        // Filter checkboxes' value only if it is true
        const checkboxValues = Object.keys(submitValue).filter(box => submitValue[box]);
        if (checkboxValues.length > 0) parsedData[key] = checkboxValues;
      } else {
        parsedData[key] = submitValue;
      }
    });

    props.filterDolls(parsedData);
  }

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
          {checkboxGroups.map((checkboxGroup, i) => loadCheckboxes(checkboxGroup, i))}
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