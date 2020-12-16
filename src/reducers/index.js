import { combineReducers } from 'redux';
import jsonData from '../data/kukuclara.json';

// To make a "clean" copy
const listOfDolls = () => JSON.parse(JSON.stringify(jsonData));

const dollsReducer = () => listOfDolls();

const selectedDollReducer = (selectedDoll = null, action) => {
    if (action.type === 'DOLL_SELECTED') {
        return action.payload;
    }
    return selectedDoll;
};

export default combineReducers({
    dolls: dollsReducer,
    selectedDoll: selectedDollReducer
});

