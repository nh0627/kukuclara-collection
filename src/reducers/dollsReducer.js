import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FETCH_DOLL,
    FILTER_DOLLS
} from "../actions/types";
import data from "../data/kukuclara.json";
import Pluralize from 'pluralize';
import { START_YEAR as startYear, END_YEAR as endYear } from '../common/util';

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
        case FETCH_DOLLS:
            const fetchedDolls = parseObjWithKeys(loadedData);
            return { ...fetchedDolls };
        case SEARCH_DOLLS:
            const { term } = action.payload;
            if (typeof term === "undefined") return parseObjWithKeys(loadedData);
            const foundDolls = loadedData.filter(doll => searchDollWithTerm(doll, term));
            return { ...parseObjWithKeys(foundDolls) };
        case FILTER_DOLLS:
            const submitData = action.payload;
            const { filterGroups } = submitData; // Get the name(label) of checkbox (group) fields from submit data
            const selectedFilterGroups = []; // data from checkboxes
            const selectcedFilters = []; // data from other fields

            for (const key in submitData) {
                // Get data from filter(checkbox) groups
                if (filterGroups.indexOf(key) > -1) {
                    selectedFilterGroups.push(key);
                } else {
                    selectcedFilters.push(key);
                }
            }

            // TODO: Make it less complecated(if possible😭)
            // Retrieve the loaded doll data to filter it
            const filteredDolls = loadedData.filter(doll => {

                // Data from normal fields
                const matchedKeysFromFilters = [];

                if (selectcedFilters.includes("term") && !searchDollWithTerm(doll, submitData.term)) matchedKeysFromFilters.push("term");

                if (selectcedFilters.includes("yearFrom") || selectcedFilters.includes("yearTo")) {
                    const { yearFrom = startYear } = submitData;
                    const { yearTo = endYear } = submitData;
                    // Filter data by year
                    const { date } = doll;
                    const releasedYear = parseInt(date);
                    if (yearFrom > releasedYear || yearTo < releasedYear) {
                        matchedKeysFromFilters.push("yearFrom", "yearTo");
                    }
                }

                // Data from filter(checkbox) groups
                const matchedKeysFromFilterGroups = selectedFilterGroups.filter(keyName => {
                    // Change/Match to the loaded object's(dolls) property name(e.g. types => typeCode)
                    const parsedKeyName = `${(Pluralize.isSingular(keyName)) ? keyName : Pluralize.singular(keyName)}Code`;
                    const codeFromLoadedData = doll[parsedKeyName];
                    const codesFromSubmitData = submitData[keyName];
                    // Check if one is matching at least
                    // In other words, within one category(e.g. skin, hair color) it is OR(union)
                    return codesFromSubmitData.indexOf(codeFromLoadedData) > -1;
                });

                const matchedKeys = [...matchedKeysFromFilters, ...matchedKeysFromFilterGroups];
                // It is AND(intersection) between different categories
                return matchedKeys.sort().join(",") === selectedFilterGroups.sort().join(",");
            });

            return { ...parseObjWithKeys(filteredDolls) };

        case FETCH_DOLL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};