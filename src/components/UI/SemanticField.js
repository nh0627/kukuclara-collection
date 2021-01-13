import { Form } from "semantic-ui-react";

export const DropdownField = props => (
    <Form.Dropdown selection {...props.input}
        value={props.input.value}
        onChange={(param, data) => props.input.onChange(data.value)}
        placeholder={props.placeholder || "Choose an option"}
        label={props.label}
        defaultValue={props.defaultValue}
        options={props.options} />
);

export const InputField = props => (
    <Form.Input {...props.input}
        value={props.input.value}
        onChange={(param, data) => props.input.onChange(data.value)}
        placeholder={props.placeholder}
        label={props.label}
    />
);

export const CheckboxField = props => (
    <Form.Checkbox {...props.input}
        checked={props.input.value ? true : false}
        onChange={(param, { checked }) => props.input.onChange(checked)}
        onClick={props.onClick}
        placeholder={props.placeholder}
        label={props.label}
        value={props.input.value ? true : false}
    />
);