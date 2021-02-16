import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FETCH_DOLL,
    FILTER_DOLLS,
    SORT_DOLLS
} from "../actions/types";
import data from "../data/kukuclara.json";
import Pluralize from "pluralize";
import { START_YEAR, END_YEAR } from "../common/util";

const loadedData = JSON.parse(JSON.stringify(data));

// Function to set primary key(id) to OBJ key
const parseObjWithKeys = (dolls) => {
    const dollObj = {};
    dolls.forEach(doll => dollObj[doll.id] = doll);
    return dollObj;
}

const searchDollWithTerm = (doll, term) => {
    const { type, series, name } = doll;
    const fullname = `${series} ${name} ${type}`;
    return fullname.toLowerCase().indexOf(term.toLowerCase()) > -1;
};

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DOLLS: {
            const fetchedDolls = parseObjWithKeys(loadedData);
            return { ...fetchedDolls };
        }
        case SEARCH_DOLLS: {
            const { term } = action.payload;
            if (typeof term === "undefined") return parseObjWithKeys(loadedData);
            const foundDolls = loadedData.filter(doll => searchDollWithTerm(doll, term));
            return { ...parseObjWithKeys(foundDolls) };
        }
        case FILTER_DOLLS: {
            const submitData = action.payload;
            const { filterGroups } = submitData; // Get the name of "grouped" filters from submit data
            const selectedFilterGroups = []; // Data from grouped filters
            const selectcedFilters = []; // Data from normal(non-grouped) filters

            for (const key in submitData) {
                if (filterGroups.indexOf(key) > -1) {
                    selectedFilterGroups.push(key);
                } else {
                    selectcedFilters.push(key);
                }
            }

            // TODO: Make it less complecated(if possible😭)
            // Retrieve the loaded dolls to filter it
            const filteredDolls = loadedData.filter(doll => {

                // Data from normal(non-grouped) filters
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

                // Data from grouped filters
                const matchedKeysFromFilterGroups = selectedFilterGroups.filter(keyName => {
                    // Change property name format(e.g. types => typeCode)
                    const parsedKeyName = `${(Pluralize.isSingular(keyName)) ? keyName : Pluralize.singular(keyName)}Code`;
                    const codeFromLoadedData = doll[parsedKeyName];
                    const codesFromSubmitData = submitData[keyName];
                    // If one haircolor is matching in selected hair colors, then it is considered "matched"
                    return codesFromSubmitData.indexOf(codeFromLoadedData) > -1;
                });

                const matchedKeys = [...matchedKeysFromFilters, ...matchedKeysFromFilterGroups];
                // If "haircolor" and "eyecolor" are selected, conditions need to be included in the matched key array.
                return matchedKeys.sort().join(",") === selectedFilterGroups.sort().join(",");
            });

            return { ...parseObjWithKeys(filteredDolls) };
        }
        case SORT_DOLLS: {
            const { condition } = action.payload;
            const sortedDolls = [...loadedData];
            sortedDolls.sort((a, b) => {
                var nameA = (condition === "name") ? a[condition].toUpperCase() : a[condition];
                var nameB = (condition === "name") ? b[condition].toUpperCase() : b[condition];
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            return { ...parseObjWithKeys(sortedDolls) };
        }
        case FETCH_DOLL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};