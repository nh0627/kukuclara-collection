import React from 'react';
import { connect } from 'react-redux';

const SearchDropdown = (props) => {

    const { types } = props;

    const tagColors = ["yellow", "olive", "teal", "blue"];

    const typeTags = (type, i) => {
        const { code, name } = type;

        return (
            <div className="item" key={code}>
                <div className={`ui empty circular label ${tagColors[i]}`}></div>
                { name }
            </div>
        );
    };

    return (
        <div className="menu">
            <div className="ui search icon input">
                <i className="search icon"></i>
                <input type="text" name="search" placeholder="Search issues..." />
            </div>
            <div className="divider"></div>
            <div className="header">
                <i className="tags icon"></i>
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
