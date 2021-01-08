import React from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { filterDolls } from '../../actions';
import Pluralize from 'pluralize';
import { CheckboxField } from 'react-semantic-redux-form';

const ALL = 'all';

let FilterModal = props => {
  const [open, setOpen] = React.useState(false);
  const { trigger, filters, selectAllFieldValues, handleSubmit, change } = props;
  const checkboxGroupKeys = Object.keys(filters);

  const renderCheckboxGroup = (keyName, index) => {

    const groupName = keyName;
    const groupIndex = index;
    const currentGroup = filters[groupName];

    const renderLabelName = (name) => {
      let newName = name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      return (Pluralize.isSingular(newName)) ? newName : Pluralize.singular(newName);
    };

    const renderField = ({ filter: { code, name }, i }) => <Field name={`${groupName}[${code}]`} component={CheckboxField} label={name} key={i} />;

    const renderSelectAllField = () => {
      const changeAllValues = () => {
        const codes = currentGroup.map(field => field.code);
        const currentValue = selectAllFieldValues[groupName]?.all;
        codes.forEach(code => change(`${groupName}.${code}`, !currentValue));
      };

      return (
        <div className="field" >
          <div className="ui checkbox">
            <Field
              type="checkbox"
              component="input"
              name={`${groupName}[${ALL}]`}
              onClick={() => changeAllValues()}
            />
            <label>All</label>
          </div>
        </div>
      );
    };

    return (
      <Form.Group inline key={groupIndex}>
        <label>{renderLabelName(groupName)}</label>
        {renderSelectAllField()}
        {currentGroup.map((filter, i) => renderField({ filter, i }))}
      </Form.Group>
    );
  };

  const onSubmit = data => {
    setOpen(false);

    const returnObj = {};
    const submitDataKeys = Object.keys(data);

    submitDataKeys.forEach(key => {
      const submitValue = data[key];
      // If a value from checkboxes
      if (checkboxGroupKeys.indexOf(key) > -1) {
        // Filter true value
        const checkboxValues = Object.keys(submitValue).filter(field => submitValue[field]);
        // if there is any true value, then put it in obj for return
        if (checkboxValues.length > 0) returnObj[key] = checkboxValues;
      } else {
        // when it is not from checkboxes, no need the upper process
        returnObj[key] = submitValue;
      }
    });

    props.filterDolls(returnObj);
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
          {checkboxGroupKeys.map((group, i) => renderCheckboxGroup(group, i))}
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

const FORM_NAME = 'filterForm';
const selector = formValueSelector(FORM_NAME);

const mapStateToProps = state => {
  const selectAllFieldNames = Object.keys(state.filters).map(key => `${key}[${ALL}]`);
  return { filters: state.filters, selectAllFieldValues: selector(state, ...selectAllFieldNames) };
};

FilterModal = reduxForm({ form: FORM_NAME })(FilterModal);

FilterModal = connect(mapStateToProps, { filterDolls, change })(FilterModal);

export default FilterModal;