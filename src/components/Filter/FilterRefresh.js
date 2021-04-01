import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Icon, Menu } from "semantic-ui-react";
import { initDolls } from "../../store/actions";

let FilterRefresh = props => {
    const refreshList = () => {
        props.initDolls();
    }

    return (
        <Menu.Item link onClick={refreshList}>
            <Icon name="refresh" />
        </Menu.Item>
    )
};

FilterRefresh = connect(null, { initDolls })(FilterRefresh);

FilterRefresh.propTypes = {
    initDolls: PropTypes.func
};

export default FilterRefresh;
