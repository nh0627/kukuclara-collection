import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { filterDolls } from "../../actions";
import { Dropdown, Icon } from "semantic-ui-react";

let FilterDropDown = (props) => {
    const { types, handleSubmit } = props;
    const [term, setTerm] = React.useState("");
    const [activeTag, setActiveTag] = React.useState("");

    const onSubmit = () => {
        const filterGroups = (activeTag === "") ? [] : ["types"];
        const returnObj = { term, types: [activeTag], filterGroups };
        props.filterDolls(returnObj);
    }

    const filterList = (code) => {
        (activeTag !== code) ? setActiveTag(code) : setActiveTag("");
        const searchTag = (code === activeTag) ? "" : code;
        const filterGroups = (searchTag === "") ? [] : ["types"];
        const returnObj = { term, types: [searchTag], filterGroups };
        props.filterDolls(returnObj);
    };

    const renderTypeTags = ({ code, name, color }) => {
        const options = { text: name, label: { color, empty: true, circular: true } };
        return (
            <Dropdown.Item
                key={code}
                {...options}
                active={activeTag === code}
                onClick={() => {
                    filterList(code);
                }} />
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Dropdown item simple icon="search">
                <Dropdown.Menu>
                    <div className="ui input icon" >
                        <Field component="input" type="text" name="term" onChange={e => setTerm(e.target.value)} placeholder="Search..." />
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

FilterDropDown = connect(mapStateToProps, { filterDolls })(FilterDropDown);

export default FilterDropDown;


