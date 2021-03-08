import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { filterDolls } from "../../store/actions";
import { Dropdown, Icon, Input } from "semantic-ui-react";

let FilterDropdownMenu = (props) => {
    const { types } = props;
    const [term, setTerm] = React.useState("");
    const [activeTags, setActiveTags] = React.useState([]);
    
    const filterByTermAndTags = ({ keyword = "", code = "" }) => {
        let returnObj = { term };
        let types = activeTags;

        const getNewActiveTags = (code) => {
            const isCodeActive = activeTags.indexOf(code) > -1;
            if (isCodeActive) return activeTags.filter(tag => tag !== code);
            else return [...activeTags, code];
        };

        if (keyword.length > 0) {
            returnObj.term = keyword;
            setTerm(keyword);
        }

        if (code.length > 0) {
            types = getNewActiveTags(code);
            setActiveTags(types);
        }

        if (types.length > 0) returnObj = { ...returnObj, types, filterGroups: ["types"] };

        props.filterDolls(returnObj);
    }

    const renderTypeTags = ({ code, name, color }) => {
        const options = { text: name, label: { color, empty: true, circular: true } };
        return (
            <Dropdown.Item
                key={code}
                {...options}
                active={activeTags.indexOf(code) > -1}
                onClick={() => {
                    filterByTermAndTags({ code });
                }} />
        );
    };

    return (
        <Dropdown item simple icon="search">
            <Dropdown.Menu style={{ "left": "-10rem" }}>
                <div className="ui input icon" >
                    <Input type="text" name="term" onChange={e => { filterByTermAndTags({ keyword: e.target.value }); }} placeholder="Search..." />
                    <Icon aria-hidden="true" name="search" />
                </div>
                <Dropdown.Divider />
                <Dropdown.Header>FILTER BY TYPE</Dropdown.Header>
                {types.map((type) => renderTypeTags(type))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mapStateToProps = state => {
    return { types: state.types };
};

FilterDropdownMenu = connect(mapStateToProps, { filterDolls })(FilterDropdownMenu);

FilterDropdownMenu.propTypes = {
    types: PropTypes.object,
    filterDolls: PropTypes.func
};

export default FilterDropdownMenu;