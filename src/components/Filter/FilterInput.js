import React from "react";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { searchDolls } from "../../actions";

const FilterInput = props => {

    const filterByTerm = (term) => props.searchDolls({ term });

    return (
        <Input
            icon="search"
            placeholder="Search..."
            onChange={e => filterByTerm(e.target.value)}
            style={{ "padding": "0.5rem 0" }} />
    );
};

const mapStateToProps = state => {
    return { types: state.types };
};

export default connect(mapStateToProps, { searchDolls })(FilterInput);