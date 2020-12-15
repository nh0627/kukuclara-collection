import React from 'react';

const Filter = () => {
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
                <div class="ui red empty circular label"></div>
                Kuku
            </div>
            <div class="item">
                <div class="ui blue empty circular label"></div>
                Clara
            </div>
            <div class="divider"></div>
            <div class="header">
                <i class="calendar icon"></i>
                Filter by year
            </div>
            <div class="item">
                <a class="ui black label">Black</a>
                <a class="ui black label">Black</a>
                <a class="ui black label">Black</a>
            </div>
        </div>
    );
};

export default Filter;
