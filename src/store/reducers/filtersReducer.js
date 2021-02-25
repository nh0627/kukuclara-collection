import filterData from "../../data/filter.json";
import { getColor } from "../../common/util";

const filters = JSON.parse(JSON.stringify(filterData));
const getFilterByName = (name) => filters[name];

export const typesReducer = (state = []) => {
    if (state.length === 0) state = getFilterByName("types");
    return state.map((type, i) => { return { ...type, ...{ color: getColor(i) } } });
};

export const filtersReducer = (state = {}) => {
    if (Object.keys(state).length === 0) state = filters;
    return { ...state };
};
