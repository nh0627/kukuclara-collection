import {
    INIT_DOLLS,
    FILTER_DOLLS,
    SORT_DOLLS
} from "../actions/types";
import Pluralize from "pluralize";
import { START_YEAR, END_YEAR } from "../../common/util";

// Function to set primary key(id) to OBJ key
const parseObjWithKeys = (dolls) => {
    const dollObj = {};
    if ( typeof dolls !== "undefined") dolls.forEach(doll => dollObj[doll.id] = doll);
    return dollObj;
}

const searchDollWithTerm = (doll, term) => {
    const { type, series, name } = doll;
    const fullname = `${series} ${name} ${type}`;
    return fullname.toLowerCase().indexOf(term.toLowerCase()) > -1;
};

export default (state = [], action) => {
    switch (action.type) {
        case INIT_DOLLS: {
            const { dolls } = action.payload;
            const loadedDolls = parseObjWithKeys(dolls);
            return { ...loadedDolls };
        }
        case FILTER_DOLLS: {
            const { submitData, dolls } = action.payload;
            const selectedFilters = []; // Data from normal(non-grouped) filters
            const selectedFilterGroups = []; // Data from grouped filters

            // Divide filters if grouped or not
            for (const key in submitData) {
                if (Array.isArray(submitData[key])) {
                    selectedFilterGroups.push(key);
                } else {
                    selectedFilters.push(key);
                }
            }

            // Filter logic starts
            const filteredDolls = dolls.filter(doll => {

                // Get matched filter names(keys) from normal(non-grouped) filters
                const matchedKeysFromFilters = [];
                if (selectedFilters.includes("term") && searchDollWithTerm(doll, submitData.term)) matchedKeysFromFilters.push("term");
                if (selectedFilters.includes("yearFrom") || selectedFilters.includes("yearTo")) {
                    const { yearFrom = START_YEAR } = submitData;
                    const { yearTo = END_YEAR } = submitData;
                    const { date } = doll;
                    // Filter data by year
                    const releasedYear = parseInt(date);
                    if (yearFrom <= releasedYear && yearTo >= releasedYear) {
                        matchedKeysFromFilters.push("yearFrom", "yearTo");
                    }
                }

                // Get matched filter names(keys) from grouped filters
                const matchedKeysFromFilterGroups = selectedFilterGroups.filter(keyName => {
                    // Change filter property name format(e.g. types => typeCode)
                    const parsedKeyName = `${(Pluralize.isSingular(keyName)) ? keyName : Pluralize.singular(keyName)}Code`;
                    const codeFromLoadedData = doll[parsedKeyName];
                    const codesFromSubmitData = submitData[keyName];
                    // For example, if one haircolor is matched in the selected hair colors
                    // then the "haircolor" filter name(key) is considered "matched"
                    return codesFromSubmitData.indexOf(codeFromLoadedData) > -1;
                });

                const selectedKeys = [...selectedFilters, ...selectedFilterGroups];
                const matchedKeys = [...matchedKeysFromFilters, ...matchedKeysFromFilterGroups];
                return matchedKeys.sort().join(",") === selectedKeys.sort().join(",");
            });

            return { ...parseObjWithKeys(filteredDolls) };
        }
        default:
            return state;
    }
};