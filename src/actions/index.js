import dollData from '../data/kukuclara.json';
import {
    FETCH_DOLLS,
    FETCH_DOLL
} from '../actions/types';
 
export const fetchDolls = () => {
    const dollList = JSON.parse(JSON.stringify(dollData));
    // 페이징 처리
    return {
        type: FETCH_DOLLS,
        payload: dollList
    };
};

export const searchDolls = formValue => {
    const dollList = JSON.parse(JSON.stringify(dollData));
    console.log(formValue);
    // 페이징 처리
    return {
        type: FETCH_DOLLS,
        payload: dollList
    };
}