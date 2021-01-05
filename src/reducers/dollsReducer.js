import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FETCH_DOLL,
    FILTER_DOLLS
} from "../actions/types";
import data from "../data/kukuclara.json";
import Pluralize from 'pluralize';

const loadedData = JSON.parse(JSON.stringify(data));

// Function to set primary key(id) to OBJ key
const parseObjWithKeys = (dolls) => {
    const dollObj = {};
    dolls.forEach(doll => dollObj[doll.id] = doll);
    return dollObj;
}

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DOLLS:
            const fetchedDolls = parseObjWithKeys(loadedData);
            return { ...fetchedDolls };
        case SEARCH_DOLLS:
            const { term } = action.payload;
            if (typeof term === "undefined") return parseObjWithKeys(loadedData);
            const foundDolls = loadedData.filter(doll => {
                const { type, series, name } = doll;
                const fullname = `${series} ${name} ${type}`;
                return fullname.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
            return { ...parseObjWithKeys(foundDolls) };
        case FILTER_DOLLS:
            const submitData = action.payload;
            const selectedFilterKeys = Object.keys(submitData);
            // TODO: Make it less complecated(if possible😭)
            // Retrieve the loaded doll data to filter it
            const filteredDolls = loadedData.filter(doll => {

                const matchedFilterKeys = selectedFilterKeys.filter(keyName => {
                    // Change/Match to the loaded object"s(dolls) property name(e.g. types => typeCode)
                    const parsedKeyName = `${Pluralize.singular(keyName)}Code`;
                    debugger;
                    const codeFromLoadedData = doll[parsedKeyName];
                    const codesFromSubmitData = submitData[keyName];
                    // Check if one is matching at least
                    // In other words, within one category(e.g. skin, hair color) it is OR(union)
                    return codesFromSubmitData.indexOf(codeFromLoadedData) > -1;
                });

                // It is AND(intersection) between different categories
                return matchedFilterKeys.sort().join(",") === selectedFilterKeys.sort().join(",");
            });

            return { ...parseObjWithKeys(filteredDolls) };

        case FETCH_DOLL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};