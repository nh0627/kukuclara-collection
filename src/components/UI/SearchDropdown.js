import React from 'react';
import { connect } from 'react-redux';

const SearchDropdown = (props) => {

    const { types } = props;

    const tagColors = ["yellow", "olive", "teal", "blue"];

    const typeTags = (type, i) => {
        return (
            <div className="item">
                <div className={`ui empty circular label ${tagColors[i]}`}></div>
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
            { types.map((type, i) => typeTags(type, i)) }
        </div>
    );
};

const mapStateToProps = state => {
    return { types: state.types };
}

export default connect(mapStateToProps)(SearchDropdown);
