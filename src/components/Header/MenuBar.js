import React from "react";
import FilterDropdownMenu from "../Filter/FilterDropdownMenu";
import FilterModal from "../Filter/FilterModal";
import FilterRefresh from "../Filter/FilterRefresh";
import { Menu, Container, Icon } from "semantic-ui-react";

const MenuBar = () => {
    const [filterModalOpen, setFilterModalOpen] = React.useState(false);

    return (
        <Container style={{ marginBottom: "1rem" }}>
            <Menu borderless>
                <Menu.Menu position="right">
                    <FilterDropdownMenu />
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
        </Container>
    );
};

export default MenuBar;