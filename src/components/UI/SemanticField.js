import { Dropdown, Form, Input } from 'semantic-ui-react';

export const DropdownField = props => (
    <Form.Field>
        <Dropdown selection {...props.input}
            value={props.input.value}
            onChange={(param, data) => props.input.onChange(data.value)}
            placeholder={props.label}
            options={props.options}
        />
    </Form.Field>
);


export const InputField = props => (
    <Input {...props.input}
        value={props.input.value}
        onChange={(param, data) => props.input.onChange(data.value)}
        placeholder={props.placeholder}
    />
);