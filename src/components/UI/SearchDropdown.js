import React from 'react';

const SearchDropdown = () => {
    return (
        <div class="menu">
            <div class="ui search icon input">
                <i class="search icon"></i>
                <input type="text" name="search" placeholder="Search issues..." />
            </div>
            <div class="divider"></div>
            <div class="header">
                <i class="tags icon"></i>
                Filter by type
            </div>
            <div class="item">
                <div class="ui grey empty circular label"></div>
                Kuku
            </div>

        </div>
    );
};

export default SearchDropdown;
