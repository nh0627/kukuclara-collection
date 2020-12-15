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
                <select name="skills" multiple="" class="ui fluid dropdown">
                    <option value="">Skills</option>
                    <option value="angular">Angular</option>
                    <option value="css">CSS</option>
                    <option value="design">Graphic Design</option>
                    <option value="ember">Ember</option>
                    <option value="html">HTML</option>
                    <option value="ia">Information Architecture</option>
                    <option value="javascript">Javascript</option>
                    <option value="mech">Mechanical Engineering</option>
                    <option value="meteor">Meteor</option>
                    <option value="node">NodeJS</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="python">Python</option>
                    <option value="rails">Rails</option>
                    <option value="react">React</option>
                    <option value="repair">Kitchen Repair</option>
                    <option value="ruby">Ruby</option>
                    <option value="ui">UI Design</option>
                    <option value="ux">User Experience</option>
                </select>
            </div>

        </div>
    );
};

export default SearchDropdown;
