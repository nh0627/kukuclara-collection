import React from "react";
import PropTypes from 'prop-types';
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { filterDolls } from "../../store/actions";

const FilterInput = props => {

    const filterByTerm = (term) => props.filterDolls({ term });

    return (
        <Input
            icon="search"
            placeholder="Search..."
            transparent
            onChange={e => filterByTerm(e.target.value)}
            style={{ "padding": "0.5rem 0" }} />
    );
};

const mapStateToProps = state => {
    return { types: state.types };
};

FilterInput.propTypes = {
    filterDolls: PropTypes.func
};

export default connect(mapStateToProps, { filterDolls })(FilterInput); 