import React, { Component } from "react";
import FilterDropDown from "../Filter/FilterDropdown";
import FilterModal from "../Filter/FilterModal";
import { Menu, Container, Icon } from "semantic-ui-react";

export default class MenuBar extends Component {
    state = { activeItem: "" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        // TODO: Active 처리
        return (
            <Menu fixed="top" borderless>
                <Container>
                    <Menu.Item
                        link
                        name="sidemenu"
                        active={activeItem === "sidemenu"}
                        onClick={this.handleItemClick}
                    >
                        <Icon name="content" />
                    </Menu.Item>
                    <Menu.Item header>Kuku Clara</Menu.Item>
                    <Menu.Menu position="right">
                        <FilterDropDown />
                        <FilterModal trigger={
                            <Menu.Item
                                link
                                name="filter"
                                active={activeItem === "filter"}
                                onClick={this.handleItemClick}
                            >
                                <Icon name="filter" />
                            </Menu.Item>} />
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    };
};