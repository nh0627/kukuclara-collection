import React from "react";
import FilterDropdownMenu from "../Filter/FilterDropdownMenu";
import SignIn from "../Auth/SignIn";
import { Menu, Container } from "semantic-ui-react";

const MenuBar = () => {
    return (
        <Container style={{ marginBottom: "1rem" }}>
            <Menu borderless>
                <Menu.Menu position="right">
                <FilterDropdownMenu />
                    <SignIn />
                </Menu.Menu>
            </Menu>
        </Container>
    );
};

export default MenuBar;