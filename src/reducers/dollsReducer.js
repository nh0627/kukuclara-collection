import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FETCH_DOLL,
    FILTER_DOLLS
} from '../actions/types';

import data from '../data/kukuclara.json';

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
            if (typeof term === 'undefined') return parseObjWithKeys(loadedData);
            const foundDolls = loadedData.filter(doll => {
                const { type, series, name } = doll;
                const fullname = `${series} ${name} ${type}`;
                return fullname.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
            return { ...parseObjWithKeys(foundDolls) };
        case FILTER_DOLLS:
            const submitData = action.payload;
            const selectedFilterKeys = Object.keys(submitData);
            // TODO: Make it less complecated
            const filteredDolls = loadedData.filter(doll => {

                const foundKeys = selectedFilterKeys.filter(key => {
                    // Change "key" to a right property name
                    const singularCodeName = key.substring(key.length - 1, 0) + "Code";
                    const loadedCode = doll[singularCodeName];
                    const selectedCodes = submitData[key];
                    // Check if one is matching at least
                    // In other words, within one category(e.g. skin, hair color) it is OR(union)
                    return selectedCodes.indexOf(loadedCode) > -1;
                });


                // It is AND(intersection) between different categories
                // TODO: Find a better way to compare two arrays
                return foundKeys.sort().join(',') === selectedFilterKeys.sort().join(',');
            });

            return { ...parseObjWithKeys(filteredDolls) };
        case FETCH_DOLL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};