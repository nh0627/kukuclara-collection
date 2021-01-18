import React from "react";
import FilterDropDown from "../Filter/FilterDropdown";
import FilterModal from "../Filter/FilterModal";
import { Menu, Container, Icon } from "semantic-ui-react";

const MenuBar = props => {
    const [filterModalOpen, setFilterModalOpen] = React.useState(false);

    return (
        <Menu fixed="top" borderless>
            <Container>
                <Menu.Menu position="right">
                    <FilterDropDown />
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
                </Menu.Menu>
            </Container>
        </Menu>
    );
};

export default MenuBar;