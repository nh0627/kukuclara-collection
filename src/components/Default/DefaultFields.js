import React from 'react';
import { Form } from "semantic-ui-react";
import PropTypes from 'prop-types';

export const DropdownField = ({
    input: { value, onChange, ...input },
    ...rest
}) => (
    <Form.Dropdown selection
        {...input}
        {...rest}
        value={value}
        onChange={(param, data) => onChange(data.value)}
        placeholder={"Choose an option"} />
);

DropdownField.propTypes = {
    input: PropTypes.object,
};

export const InputField = ({
    input: { value, onChange, ...input },
    ...rest
}) => (
    <Form.Input
        {...input}
        {...rest}
        value={value}
        onChange={(param, data) => onChange(data.value)}
    />
);

InputField.propTypes = {
    input: PropTypes.object,
};

export const CheckboxField = ({
    input: { value, onChange, ...input },
    ...rest
}) => (
    <Form.Checkbox
        {...input}
        {...rest}
        checked={value === true}
        onChange={(param, { checked }) => onChange(checked)}
        type="checkbox"
    />
);

CheckboxField.propTypes = {
    input: PropTypes.object,
};