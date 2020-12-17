import dollData from '../data/kukuclara.json';
import {
    FETCH_DOLLS,
    FETCH_DOLL
} from '../actions/types';
 
export const fetchDolls = () => {
    const dollList = JSON.parse(JSON.stringify(dollData));
    return {
        type: FETCH_DOLLS,
        payload: dollList
    };
};

export const searchDoll = formValue => {
    const dollList = JSON.parse(JSON.stringify(dollData));
    console.log(formValue);
    return {
        type: FETCH_DOLLS,
        payload: dollList
    };
}