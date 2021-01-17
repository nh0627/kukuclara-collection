import { Form } from "semantic-ui-react";

export const DropdownField = ({
    input: { value, onChange, ...input },
    meta: { touched, error },
    ...rest
}) => (
    <Form.Dropdown selection
        {...input}
        {...rest}
        value={value}
        onChange={(param, data) => onChange(data.value)}
        placeholder={"Choose an option"} />
);

export const InputField = ({
    input: { value, onChange, ...input },
    meta: { touched, error },
    ...rest
}) => (
    <Form.Input
        {...input}
        {...rest}
        value={value}
        onChange={(param, data) => onChange(data.value)}
    />
);

export const CheckboxField = ({
    input: { value, onChange, ...input },
    meta: { touched, error },
    ...rest
}) => (
    <Form.Checkbox
        {...input}
        {...rest}
        checked={value===true}
        onChange={(param, { checked }) => onChange(checked)}
        type="checkbox"
    />
);