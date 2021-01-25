import React from "react";
import FilterInput from "../Filter/FilterInput";
import FilterModal from "../Filter/FilterModal";
import { Menu, Container, Icon } from "semantic-ui-react";

const MenuBar = props => {
    const [filterModalOpen, setFilterModalOpen] = React.useState(false);

    return (
        <Menu borderless>
            <Container>
                <Menu.Item as="a" href={"/"} header>KC</Menu.Item>
                <Menu.Menu position="right">
                    <FilterInput />
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