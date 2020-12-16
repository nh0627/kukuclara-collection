import { combineReducers } from 'redux';
import dollData from '../data/kukuclara.json';
import filterData from '../data/filter.json';

// 해당 Reducer 나중에 모듈로 분리

// String Json then parse it to make a "clean" copy
const parseJson = (jsonData) =>  JSON.parse(JSON.stringify(jsonData));

const listOfDolls = parseJson(dollData);

const dollsReducer = () => listOfDolls;

const listOfFilter = parseJson(filterData);

const typesReducer = () => listOfFilter["type"];

const selectedDollReducer = (selectedDoll = null, action) => {
    if (action.type === 'DOLL_SELECTED') {
        return action.payload;
    }
    return selectedDoll;
};

export default combineReducers({
    dolls: dollsReducer,
    types: typesReducer,
    selectedDoll: selectedDollReducer
});

