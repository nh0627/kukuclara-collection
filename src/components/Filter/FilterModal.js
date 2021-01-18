import React from "react";
import Pluralize from "pluralize";
import { connect } from "react-redux";
import { Field, reduxForm, change } from "redux-form";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import { filterDolls } from "../../actions";
import { START_YEAR as startYear, END_YEAR as endYear } from "../../common/util";
import { DropdownField as Dropdown, InputField as Input, CheckboxField as Checkbox } from "../UI/Field";
import DefaultModal from "../UI/DefaultModal";

let FilterModal = props => {
  const { trigger, filters, handleSubmit, change, open, setOpen } = props;
  // const [open, setOpen] = React.useState(false);
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
      // If a value from checkboxes
      if (checkboxGroups.indexOf(key) > -1) {
        // Filter true value
        const checkboxValues = Object.keys(submitValue).filter(field => submitValue[field]);
        // if there is any true value, then put it in obj for return
        if (checkboxValues.length > 0) returnObj[key] = checkboxValues;
      } else {
        // when it is not from checkboxes, no need the upper process
        returnObj[key] = submitValue;
      }
    });

    returnObj.filterGroups = checkboxGroups;

    props.filterDolls(returnObj);
  }

  const modalActions = (
    <Modal.Actions>
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
      open={open} setOpen={setOpen}>
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

FilterModal = connect(mapStateToProps, { filterDolls, change })(FilterModal);

export default FilterModal;