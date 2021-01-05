import filterData from "../data/filter.json";
import { getColor } from "../common/util";

const TYPES = "types";

const filters = JSON.parse(JSON.stringify(filterData));
const getFilterByName = (name) => filters[name];

export const typesReducer = (state = [], action) => {
    if (state.length === 0) state = getFilterByName(TYPES);
    return state.map((type, i) => { return { ...type, ...{ color: getColor(i) } } });
};

export const filtersReducer = (state = {}, action) => {
    if (Object.keys(state).length === 0) state = filters;
    return { ...state };
};
