import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { searchDolls } from '../../actions';

let SearchBox = (props) => {
    const { handleSubmit, types } = props;

    const filterList = (code) => {
        console.log(code);
    };

    const typeTags = (type) => {
        const { code, name, color } = type;
        return (
            <div className="item" key={code} onClick={ () => filterList(code)}>
                <div className={`ui empty circular label ${color}`}></div>
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
                    <Field component="input" type="text" name="term" placeholder="Search item..." />
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
    return { types: state.types };
}

SearchBox = reduxForm({form: 'searchForm'})(SearchBox)

SearchBox = connect(mapStateToProps, { searchDolls })(SearchBox)

export default SearchBox;


