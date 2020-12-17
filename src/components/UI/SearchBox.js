import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import getColors from'../../data/colors';

let SearchBox = (props) => {

    const { handleSubmit, types } = props;

    const typeTags = (type, i) => {
        const { code, name } = type;

        return (
            <div className="item" key={code}>
                <div className={`ui empty circular label ${getColors(i)}`}></div>
                { name}
            </div>
        );
    };

    const onSubmit = (val) => console.log(1, val);

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
    return { types: state.types };
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SearchBox = reduxForm({form: 'initializeFromState'})(SearchBox)

SearchBox = connect(mapStateToProps)(SearchBox)

export default SearchBox;


