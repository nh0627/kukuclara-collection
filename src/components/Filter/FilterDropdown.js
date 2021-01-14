import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { filterDolls, searchDolls } from "../../actions";
import { Dropdown, Icon } from "semantic-ui-react";

let FilterDropDown = (props) => {
    const { types, handleSubmit } = props;

    const onSubmit = val => props.searchDolls(val);

    const filterList = code => props.filterDolls({ types: [code], filterGroups: ["types"] });

    const renderTypeTags = ({ code, name, color }) => {
        const options = { text: name, label: { color, empty: true, circular: true } };
        return (
            <Dropdown.Item key={code} {...options} onClick={() => filterList(code)} />
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Dropdown item simple icon="search">
                <Dropdown.Menu>
                    <div className="ui input icon" >
                        <Field component="input" type="text" name="term" placeholder="Search..." />
                        <Icon aria-hidden="true" name="search" />
                    </div>
                    <Dropdown.Divider />
                    <Dropdown.Header>FILTER BY TYPE</Dropdown.Header>
                    {types.map((type) => renderTypeTags(type))}
                </Dropdown.Menu>
            </Dropdown>
        </form >
    );
};

const mapStateToProps = state => {
    return { types: state.types };
};

FilterDropDown = reduxForm({ form: "searchForm" })(FilterDropDown);

FilterDropDown = connect(mapStateToProps, { searchDolls, filterDolls })(FilterDropDown);

export default FilterDropDown;


