import React from 'react';
import { connect } from 'react-redux';

const SearchDropdown = (props) => {

    const { types } = props;

    const typeTags = (type) => {
        return (
            <div class="item">
                <div class="ui grey empty circular label"></div>
                { type }
            </div>
        );
    };

    return (
        <div class="menu">
            <div class="ui search icon input">
                <i class="search icon"></i>
                <input type="text" name="search" placeholder="Search issues..." />
            </div>
            <div class="divider"></div>
            <div class="header">
                <i class="tags icon"></i>
                Filter by type
            </div>
            { types.map(type => typeTags(type)) }
        </div>
    );
};

const mapStateToProps = state => {
    return { types: state.types };
}

export default connect(mapStateToProps)(SearchDropdown);
