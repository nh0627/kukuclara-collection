import React from "react";
import Pluralize from "pluralize";
import { connect } from "react-redux";
import { Field, reduxForm, change, formValueSelector } from "redux-form";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import { filterDolls } from "../../actions";
import { START_YEAR as startYear, END_YEAR as endYear } from "../../common/util";
import { DropdownField as Dropdown, InputField as Input, CheckboxField as Checkbox } from "../UI/SemanticField";
import SemanticModal from "../UI/SemanticModal";

let FilterModal = props => {
  const { trigger, filters, selectAllFieldValues, handleSubmit, change } = props;
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
      let newName = name.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
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
      const changeAllValues = () => {
        const codes = currentGroup.map(field => field.code);
        const currentValue = selectAllFieldValues[groupName]?.all;
        codes.forEach(code => change(`${groupName}.${code}`, !currentValue));
      };

      return (
        <Field
          label="All"
          component={Checkbox}
          name={`${groupName}.all`}
          onClick={() => changeAllValues()}
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

  const modalButtons = (
    <div>
      <Button color="red">
        <Icon name="remove" /> Close
      </Button>
      <Button color="green" form="filterForm" key="submit" htmltype="submit">
        <Icon name="checkmark" /> OK
      </Button>
    </div>
  );

  return (
    <SemanticModal
      header={{ content: "Advanced filter", icon: "filter" }}
      trigger={trigger}
      buttons={modalButtons}>
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
    </SemanticModal >
  )
}

const selector = formValueSelector("filterForm");

const mapStateToProps = state => {
  const selectAllFieldNames = Object.keys(state.filters).map(key => `${key}.all`);
  return { filters: state.filters, selectAllFieldValues: selector(state, ...selectAllFieldNames) };
};

FilterModal = reduxForm({ form: "filterForm" })(FilterModal);

FilterModal = connect(mapStateToProps, { filterDolls, change })(FilterModal);

export default FilterModal;