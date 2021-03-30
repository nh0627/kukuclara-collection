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
            const { filterGroups = [] } = submitData; // Get the name of "grouped" filters from submit data
            const selectedFilterGroups = []; // Data from grouped filters
            const selectcedFilters = []; // Data from normal(non-grouped) filters

            for (const key in submitData) {
                if (filterGroups.indexOf(key) > -1) {
                    selectedFilterGroups.push(key);
                } else {
                    selectcedFilters.push(key);
                }
            }

            // TODO: Make it less complecated
            const filteredDolls = dolls.filter(doll => {

                // Matched filter names(keys) from normal(non-grouped) filters
                const matchedKeysFromFilters = [];

                if (selectcedFilters.includes("term") && !searchDollWithTerm(doll, submitData.term)) matchedKeysFromFilters.push("term");

                if (selectcedFilters.includes("yearFrom") || selectcedFilters.includes("yearTo")) {
                    const { yearFrom = START_YEAR } = submitData;
                    const { yearTo = END_YEAR } = submitData;
                    // Filter data by year
                    const { date } = doll;
                    const releasedYear = parseInt(date);
                    if (yearFrom > releasedYear || yearTo < releasedYear) {
                        matchedKeysFromFilters.push("yearFrom", "yearTo");
                    }
                }

                // Matched filter names(keys) from grouped filters
                const matchedKeysFromFilterGroups = selectedFilterGroups.filter(keyName => {
                    // Change filter property name format(e.g. types => typeCode)
                    const parsedKeyName = `${(Pluralize.isSingular(keyName)) ? keyName : Pluralize.singular(keyName)}Code`;
                    const codeFromLoadedData = doll[parsedKeyName];
                    const codesFromSubmitData = submitData[keyName];
                    // For example, if one haircolor is matched in selected hair colors
                    // then the "haircolor" filter name(key) is considered "matched"
                    return codesFromSubmitData.indexOf(codeFromLoadedData) > -1;
                });

                const matchedKeys = [...matchedKeysFromFilters, ...matchedKeysFromFilterGroups];
                // For example, if "haircolor" and "eyecolor" are selected
                // those filter names(keys) need to be included also in "matched" filter names
                return matchedKeys.sort().join(",") === selectedFilterGroups.sort().join(",");
            });

            return { ...parseObjWithKeys(filteredDolls) };
        }
        case SORT_DOLLS: {
            const { condition, dolls } = action.payload;
            const sortedDolls = dolls.sort((a, b) => {
                var nameA = (condition === "name") ? a[condition].toUpperCase() : a[condition];
                var nameB = (condition === "name") ? b[condition].toUpperCase() : b[condition];
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            return { ...parseObjWithKeys(sortedDolls) };
        }
        default:
            return state;
    }
};