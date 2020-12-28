import filterData from '../data/filter.json';
import { getColor } from '../data/color';
const TYPES = "types";

const filters = JSON.parse(JSON.stringify(filterData));
const getFilterByName = (name) => filters[name];

export const typesReducer = (state = [], action) => {
    if (state.length === 0) state = getFilterByName(TYPES);
    return state.map((type, i) => { return { ...type, ...{ color: getColor(i) } } });
};
