import React from "react";
import PropTypes from 'prop-types';
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { searchDolls } from "../../store/actions";

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

FilterInput.propTypes = {
    searchDolls: PropTypes.func
};

export default connect(mapStateToProps, { searchDolls })(FilterInput);