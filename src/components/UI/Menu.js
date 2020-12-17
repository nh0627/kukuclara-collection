import React from 'react';
import SearchBox from './SearchBox'

const Menu = () => {
    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <a className="icon item">
                    <i className="content icon"></i>
                </a>
                <div className="header item">Kuku Clara</div>
            <div className="right menu">
                    <div className="ui item icon top right pointing dropdown button">
                        <i className="search icon"></i>
                        <SearchBox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
