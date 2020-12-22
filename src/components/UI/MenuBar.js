import React from 'react';
import FilterDropDown from './FilterDropdown';
import { Menu, Container, Icon } from 'semantic-ui-react';

const MenuBar = () => {
    return (
        <Menu fixed='top'>
            <Container>
                <Menu.Item ><Icon name='content'/></Menu.Item>
                <Menu.Item header>Kuku Clara</Menu.Item>
                <FilterDropDown />
            </Container>
        </Menu>


    );
};

export default MenuBar;
