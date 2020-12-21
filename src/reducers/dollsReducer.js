import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FETCH_DOLL
} from '../actions/types';

import data from '../data/kukuclara.json';

const loadedData = JSON.parse(JSON.stringify(data));

const parseData = (dolls) => {
    const dollObj = {};
    dolls.forEach(doll => dollObj[doll.id] = doll);
    return dollObj;
}

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DOLLS:
            const fetchedDolls = parseData(loadedData);
            return { ...fetchedDolls };
        case SEARCH_DOLLS:
            const { term } = action.payload;
            const filteredDolls = Object.values(loadedData).filter(doll => {
                const { type, series, name } = doll;
                const fullname = `${series} ${name} ${type}`;
                return fullname.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
            return { ...parseData(filteredDolls) };
        case FETCH_DOLL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};