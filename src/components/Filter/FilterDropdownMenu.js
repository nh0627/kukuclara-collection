import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { filterDolls, initFilters } from "../../store/actions";
import { Dropdown, Icon, Input } from "semantic-ui-react";
import { getColor } from "../../common/util";

let FilterDropdownMenu = (props) => {
    const { filters } = props;
    const [term, setTerm] = React.useState("");

    React.useEffect(() => {
        props.initFilters();
    }, []);

    const getTypesFromFilters = () => {
        const { types } = filters;
        if (typeof types === "undefined") return [];
        else return types.map((type, i) => { return { ...type, ...{ color: getColor(i) } } });
    };

    const filterByTermAndTags = ({ keyword = "", code = "" }) => {
        let returnObj = { term };
        let types = (code.length > 0 )? [code] : [];

        if (keyword.length > 0) {
            returnObj.term = keyword;
            setTerm(keyword);
        }
        
        if (types.length > 0) returnObj = { ...returnObj, types };

        props.filterDolls(returnObj);
    }

    const renderTypeTags = ({ code, name, color }) => {
        const options = { text: name, label: { color, empty: true, circular: true } };
        return (
            <Dropdown.Item
                key={code}
                {...options}
                onClick={() => filterByTermAndTags({ code })} />
        );
    };

    return (
        <Dropdown item simple icon="search">
            <Dropdown.Menu style={{ "left": "-10rem" }}>
                <div className="ui input icon" >
                    <Input type="text" name="term" onChange={e => filterByTermAndTags({ keyword: e.target.value })} placeholder="Search..." />
                    <Icon aria-hidden="true" name="search" />
                </div>
                <Dropdown.Divider />
                <Dropdown.Header>FILTER BY TYPE</Dropdown.Header>
                {getTypesFromFilters().map((type) => renderTypeTags(type))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mapStateToProps = state => {
    return { filters: state.filters };
};

FilterDropdownMenu = connect(mapStateToProps, { filterDolls, initFilters })(FilterDropdownMenu);

FilterDropdownMenu.propTypes = {
    filters: PropTypes.object,
    filterDolls: PropTypes.func,
    initFilters: PropTypes.func
};

export default FilterDropdownMenu;