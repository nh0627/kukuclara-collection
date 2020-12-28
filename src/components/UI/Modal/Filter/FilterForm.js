import React from "react";
import { Form, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { filterDolls } from "../../../../actions";

let FilterForm = props => {
    const { filters } = props;
    const { types, hairColors, eyeColors, skinTypes } = filters;
    debugger;
    const loadTypeCheckboxes = (type) => {
        const { code, name } = type;
        return (
            <Form.Checkbox key={code} label={name} value={code} />
        );
    };

    return (
        <Container>
            <Form>
                <Form.Group inline>
                    <label>Type</label>
                    {types.map((type) => loadTypeCheckboxes(type))}
                </Form.Group>
                <Form.Group inline>
                    <label>Hair Colors</label>
                    {hairColors.map((type) => loadTypeCheckboxes(type))}
                </Form.Group>
                <Form.Group inline>
                    <label>Eye Colors</label>
                    {eyeColors.map((type) => loadTypeCheckboxes(type))}
                </Form.Group>
                <Form.Group inline>
                    <label>Skin Types</label>
                    {skinTypes.map((type) => loadTypeCheckboxes(type))}
                </Form.Group>
            </Form>
        </Container>
    );
};

const mapStateToProps = state => {
    return { filters: state.filters };
};

// FilterDropDown = reduxForm({ form: "searchForm" })(FilterDropDown);

FilterForm = connect(mapStateToProps, { filterDolls })(FilterForm);

export default FilterForm;