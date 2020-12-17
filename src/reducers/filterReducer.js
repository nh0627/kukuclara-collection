import filterData from '../data/filter.json';

const filters = JSON.parse(JSON.stringify(filterData));

export const typesReducer = () => filters["type"];
