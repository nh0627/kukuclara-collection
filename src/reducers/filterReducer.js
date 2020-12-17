import filterData from '../data/filter.json';
import { getColor } from '../data/color';

const filter = JSON.parse(JSON.stringify(filterData));

export const typeReducer = () => filter["type"].map((type, i) => { return { ...type, ...{ color: getColor(i) } } });
