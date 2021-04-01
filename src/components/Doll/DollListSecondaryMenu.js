import React from "react";
import PropTypes from 'prop-types';
import { Menu, Label } from "semantic-ui-react";

let DollListSecondaryMenu = props => {

    const { setSortCondition, total } = props;

    return (
        <Menu secondary>
            <Menu.Item
                name="total"
                header>
                Total <Label basic circular>{total}</Label>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item header>Sort By</Menu.Item>
                <Menu.Item
                    name="Date"
                    as="a"
                    onClick={() => setSortCondition("date")}
                />
                <Menu.Item
                    name="Name"
                    as="a"
                    onClick={() => setSortCondition("name")}
                />
            </Menu.Menu>
        </Menu>
    );
};

DollListSecondaryMenu.propTypes = {
    total: PropTypes.number,
    setSortCondition: PropTypes.func
};

export default DollListSecondaryMenu;
