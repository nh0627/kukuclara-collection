import React from "react";
import PropTypes from 'prop-types';
import { Menu, Label, Dropdown, Icon } from "semantic-ui-react";
import FilterRefresh from "../Filter/FilterRefresh";
import FilterModal from "../Filter/FilterModal";

let DollListSecondaryMenu = props => {
    const [filterModalOpen, setFilterModalOpen] = React.useState(false);
    const { setSortCondition, total } = props;

    return (
        <Menu secondary>
            <Menu.Item
                name="total"
                header
                className="total">
                <span>Total</span> <Label basic circular>{total}</Label>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Dropdown item text='Sort by'>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSortCondition("date")}>Date</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortCondition("name")}>Name</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <FilterModal
                        open={filterModalOpen}
                        setOpen={setFilterModalOpen}
                        trigger={
                            <Menu.Item
                                link
                                name="filterModal"
                                active={filterModalOpen === true}
                            >
                                <Icon name="filter" />
                            </Menu.Item>} />
                <FilterRefresh />
            </Menu.Menu>
        </Menu>
    );
};

DollListSecondaryMenu.propTypes = {
    total: PropTypes.number,
    setSortCondition: PropTypes.func
};

export default DollListSecondaryMenu;
