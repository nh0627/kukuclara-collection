import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { filterDolls } from "../../actions";
import { Dropdown, Icon, Input } from "semantic-ui-react";

let FilterDropdown = (props) => {
    const { types } = props;
    const [term, setTerm] = React.useState("");
    const [activeTag, setActiveTag] = React.useState("");

    const filterByTerm = (term) => {
        setTerm(term);
        const filterGroups = (activeTag === "") ? [] : ["types"];
        const returnObj = { term, types: [activeTag], filterGroups };
        props.filterDolls(returnObj);
    }

    const filterByTag = (code) => {
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
                    filterByTag(code);
                }} />
        );
    };

    return (
        <Dropdown item simple icon="search">
            <Dropdown.Menu style={{ "left": "-10.5rem" }}>
                <div className="ui input icon" >
                    <Input type="text" name="term" onChange={e => filterByTerm(e.target.value)} placeholder="Search..." />
                    <Icon aria-hidden="true" name="search" />
                </div>
                <Dropdown.Divider />
                <Dropdown.Header>FILTER BY TYPE</Dropdown.Header>
                {types.map((type) => renderTypeTags(type))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mapStateToProps = state => {
    return { types: state.types };
};

FilterDropdown = connect(mapStateToProps, { filterDolls })(FilterDropdown);

FilterDropdown.propTypes = {
    types: PropTypes.object,
    filterDolls: PropTypes.func
};

export default FilterDropdown;