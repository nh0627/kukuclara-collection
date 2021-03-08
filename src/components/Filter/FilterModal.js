import React from "react";
import PropTypes from 'prop-types';
import Pluralize from "pluralize";
import { connect } from "react-redux";
import { Field, reduxForm, change } from "redux-form";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import { filterDolls, initFilters } from "../../store/actions";
import { START_YEAR as startYear, END_YEAR as endYear } from "../../common/util";
import { DropdownField as Dropdown, InputField as Input, CheckboxField as Checkbox } from "../Default/DefaultFields";
import DefaultModal from "../Default/DefaultModal";

let FilterModal = props => {

  React.useEffect(() => {
    props.initFilters();
  }, []);

  const { trigger, filters, handleSubmit, change, open, setOpen, reset } = props;
  const checkboxGroups = Object.keys(filters);

  const getYearOptions = () => {
    const dropdownItems = [];
    for (let year = startYear; year <= endYear; year++) {
      dropdownItems.push({ key: year, text: year, value: year });
    }
    return dropdownItems;
  };

  const renderCheckboxGroup = (groupName, groupIndex) => {
    const currentGroup = filters[groupName];

    const renderLabelName = name => {
      const spacedName = name.replace(/([A-Z])/g, " $1");
      let newName = `${spacedName.charAt(0).toUpperCase() + spacedName.slice(1).toLowerCase()}`.replace("groups", "");
      return (Pluralize.isSingular(newName)) ? newName : Pluralize.singular(newName);
    };

    const renderField = ({ filter: { code, name }, i }) => {
      return (
        <Field
          key={i}
          label={name}
          component={Checkbox}
          name={`${groupName}[${code}]`}
        />
      );
    };

    const renderSelectAllField = () => {
      const changeAllValues = e => {
        const codes = currentGroup.map(field => field.code);
        const currentValue = e.currentTarget.childNodes[0].checked;
        codes.forEach(code => change(`${groupName}.${code}`, !currentValue));
      };

      return (
        <Field
          label="All"
          component={Checkbox}
          name={`${groupName}["all"]`}
          onClick={changeAllValues}
        />
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
      // If there is a value from checkboxes
      if (checkboxGroups.indexOf(key) > -1) {
        // Filter true value from checkboxes
        const checkboxValues = Object.keys(submitValue).filter(field => submitValue[field]);
        // if there is any true value, then put it in return object
        if (checkboxValues.length > 0) returnObj[key] = checkboxValues;
      } else {
        // when it is not from checkboxes, no need this process
        returnObj[key] = submitValue;
      }
    });

    returnObj.filterGroups = checkboxGroups;

    props.filterDolls(returnObj);
  }

  const modalActions = (
    <Modal.Actions>
      <Button onClick={() => reset()}> <Icon name="erase" />Clear</Button>
      <Button color="red" onClick={() => setOpen(false)}>
        <Icon name="remove" /> Close
      </Button>
      <Button color="green" form="filterForm" key="submit" htmltype="submit">
        <Icon name="checkmark" /> OK
      </Button>
    </Modal.Actions>
  );

  return (
    <DefaultModal
      header={{ content: "Advanced filter", icon: "filter" }}
      trigger={trigger}
      actions={modalActions}
      open={open} setOpen={setOpen}
      size="large">
      <Modal.Content>
        <Form id="filterForm" onSubmit={handleSubmit(onSubmit)}>
          <Field component={Input} name="term" label="Search" placeholder="Search..." />
          <Form.Group widths="equal">
            <Field
              name="yearFrom"
              component={Dropdown}
              options={getYearOptions()}
              label="Released from"
            />
            <Field
              name="yearTo"
              component={Dropdown}
              options={getYearOptions()}
              label="Released to"
            />
          </Form.Group>
          {checkboxGroups.map((group, i) => renderCheckboxGroup(group, i))}
        </Form>
      </Modal.Content>
    </DefaultModal >
  )
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

FilterModal = reduxForm({ form: "filterForm" })(FilterModal);

FilterModal = connect(mapStateToProps, { filterDolls, initFilters, change })(FilterModal);

FilterModal.propTypes = {
  trigger: PropTypes.object,
  filters: PropTypes.object,
  handleSubmit: PropTypes.func,
  filterDolls: PropTypes.func,
  initFilters: PropTypes.func,
  change: PropTypes.func,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  reset: PropTypes.func
};

export default FilterModal;