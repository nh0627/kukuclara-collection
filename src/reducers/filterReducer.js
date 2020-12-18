import filterData from '../data/filter.json';
import { getColor } from '../data/color';

let filter = {};
const getFilter = () => {
    // Todo: 더 나은 방식 없을까?
    filter = (Object.keys(filter).length === 0)? JSON.parse(JSON.stringify(filterData)) : filter;
    return filter;
};

export const typeReducer = () => {
    const _filter = getFilter();
    return _filter["type"].map((type, i) => { return { ...type, ...{ color: getColor(i) } } })
};
