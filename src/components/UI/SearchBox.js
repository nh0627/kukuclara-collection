import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import getColors from'../../data/colors';
import { searchDolls } from '../../actions';

let SearchBox = (props) => {
    const { handleSubmit, types } = props;

    const typeTags = (type, i) => {
        const { code, name } = type;
        return (
            <div className="item" key={code}>
                <div className={`ui empty circular label ${getColors(i)}`}></div>
                {name}
            </div>
        );
    };

    const onSubmit = (val) => props.searchDolls(val);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="menu">
                <div className="ui search icon input">
                    <i className="search icon"></i>
                    <Field component="input" type="text" name="search" placeholder="Search item..." />
                </div>
                <div className="divider"></div>
                <div className="header">
                    <i className="tags icon"></i>
                Filter by type
            </div>
                {types.map((type, i) => typeTags(type, i))}
            </div>
        </form>
    );
};

const mapStateToProps = state => {
    return { types: state.type };
}
SearchBox = reduxForm({form: 'searchForm'})(SearchBox)

SearchBox = connect(mapStateToProps, { searchDolls })(SearchBox)

export default SearchBox;


