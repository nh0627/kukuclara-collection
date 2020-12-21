import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FETCH_DOLL
} from '../actions/types';

import data from '../data/kukuclara.json';

const parsedData = JSON.parse(JSON.stringify(data));

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DOLLS:
            const fetchedDolls = {};
            parsedData.forEach(doll => fetchedDolls[doll.id] = doll);
            return { ...state, ...fetchedDolls };
        case SEARCH_DOLLS:
            const { term } = action.payload;
            debugger;
            const searchedDolls = state.filter(doll => {
                const { type, series, name } = doll;
                const fullname = `${series} ${name} ${type}`;
                return fullname.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
            return { ...searchedDolls };
        case FETCH_DOLL:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};