import React from "react";
import FilterDropDown from "../Filter/FilterDropdown";
import FilterModal from "../Filter/FilterModal";
import { Menu, Container, Icon } from "semantic-ui-react";

const MenuBar = props => {
    const [filterModalOpen, setFilterModalOpen] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState("");

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu fixed="top" borderless>
            <Container>
                <Menu.Item header>Kuku Clara</Menu.Item>
                <Menu.Menu position="right">
                    <FilterDropDown />
                    <FilterModal
                        open={filterModalOpen}
                        setOpen={setFilterModalOpen}
                        trigger={
                            <Menu.Item
                                link
                                name="filter"
                                active={activeItem === "filter" && filterModalOpen === true}
                                onClick={handleItemClick}
                            >
                                <Icon name="filter" />
                            </Menu.Item>} />
                </Menu.Menu>
            </Container>
        </Menu>
    );
};

export default MenuBar;