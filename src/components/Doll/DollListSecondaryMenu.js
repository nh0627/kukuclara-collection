import React from "react";
import PropTypes from 'prop-types';
import { Menu, Label } from "semantic-ui-react";
import FilterRefresh from "../Filter/FilterRefresh";

let DollListSecondaryMenu = props => {

    const { setSortCondition, total, sortCondition } = props;

    return (
        <Menu secondary>
            <Menu.Item
                name='home'
                header>
                <span className="total">Total </span><Label basic circular className="total">{total}</Label>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item className="sortby" header><span>Sort By</span></Menu.Item>
                <Menu.Item
                    name="Date"
                    as="a"
                    active={sortCondition === "date"}
                    onClick={() => setSortCondition("date")}
                />
                <Menu.Item
                    name="Name"
                    as="a"
                    active={sortCondition === "name"}
                    onClick={() => setSortCondition("name")}
                />
                <FilterRefresh />
            </Menu.Menu>
        </Menu>
    );
};

DollListSecondaryMenu.propTypes = {
    total: PropTypes.number,
    setSortCondition: PropTypes.func,
    sortCondition: PropTypes.string
};

export default DollListSecondaryMenu;