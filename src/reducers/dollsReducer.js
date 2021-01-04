import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FETCH_DOLL,
    FILTER_DOLLS
} from '../actions/types';

import data from '../data/kukuclara.json';

const loadedData = JSON.parse(JSON.stringify(data));

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
            // ['types', 'hairColors']
            const filterKeys = Object.keys(submitData);
            const filteredDolls = loadedData.filter(doll => {
                
                const isFound = filterKeys.find(key => {
                    const singularKeyName = key.substring(key.length-1, 0) + "Code";
                    const loadedCode = doll[singularKeyName]; // string
                    const submitCodes = submitData[key]; // array
                    return submitCodes.indexOf(loadedCode) > -1;
                })
                return typeof isFound !== "undefined";
            });
            return { ...parseObjWithKeys(filteredDolls) };
        case FETCH_DOLL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};