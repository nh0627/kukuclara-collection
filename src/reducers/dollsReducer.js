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
            const searchedDolls = loadedData.filter(doll => {
                const { type, series, name } = doll;
                const fullname = `${series} ${name} ${type}`;
                return fullname.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
            return { ...parseObjWithKeys(searchedDolls) };
        case FILTER_DOLLS:
            // TODO: 모달 뜸과 동시에 수정
            const _typeCode = action.payload.type.codes[0];
            const filteredDolls = loadedData.filter(doll => {
                return doll.typeCode.toLowerCase() === _typeCode.toLowerCase();
            });
            return { ...parseObjWithKeys(filteredDolls) };
        case FETCH_DOLL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};