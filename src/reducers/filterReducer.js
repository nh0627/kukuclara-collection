import filterData from '../data/filter.json';
import { getColor } from '../data/color';

const filter = JSON.parse(JSON.stringify(filterData));
const getFilterByName = (name) => {
    return filter[name];
};

export const typeReducer = (state = [], action) => {
    if (state.length === 0) state = getFilterByName("type");
    return state.map((type, i) => { return { ...type, ...{ color: getColor(i) } } });
};
