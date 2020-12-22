import React from 'react';
import FilterDropDown from './FilterDropdown';
import { Menu, Container, Icon } from 'semantic-ui-react';

const MenuBar = () => {
    return (
        <Menu fixed='top' borderless>
            <Container>
                <Menu.Item ><Icon name='content' /></Menu.Item>
                <Menu.Item header>Kuku Clara</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon name='filter' />
                    </Menu.Item>
                    <FilterDropDown />
                </Menu.Menu>
            </Container>
        </Menu>


    );
};

export default MenuBar;
