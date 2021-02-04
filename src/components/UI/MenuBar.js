import React from "react";
import FilterDropdown from "../Filter/FilterDropdown";
import FilterModal from "../Filter/FilterModal";
import { Menu, Container, Icon } from "semantic-ui-react";

const MenuBar = () => {
    const [filterModalOpen, setFilterModalOpen] = React.useState(false);

    return (
        <Container style={{marginBottom: "1rem"}}>
            <Menu borderless>
                <Menu.Menu position="right">
                    <FilterDropdown />
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
            </Menu>
        </Container>
    );
};

export default MenuBar;