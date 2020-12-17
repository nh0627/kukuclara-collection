import filterData from '../data/filter.json';

const filter = JSON.parse(JSON.stringify(filterData));

export const typeReducer = () => filter["type"];
