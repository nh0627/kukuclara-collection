import dollData from '../data/kukuclara.json';
import {
    FETCH_DOLLS,
    FETCH_DOLL
} from '../actions/types';

let dolls = [];
const getDolls = () => {
    // keep the json file from being read again => fix it later if there is a better way
    dolls = (dolls.length > 0) ? dolls : JSON.parse(JSON.stringify(dollData));
    return dolls;
};
 
export const fetchDolls = () => {
    const dollList = getDolls();
    // 페이징 처리
    return {
        type: FETCH_DOLLS,
        payload: dollList
    };
};

export const searchDolls = formValue => {
    const _dollList = getDolls();
    const { term } = formValue;
    const dollList = _dollList.filter(doll => {
        const { type, series, name } = doll;
        const fullname = `${series} ${name} ${type}`;
        return fullname.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
    // 페이징 처리
    return {
        type: FETCH_DOLLS,
        payload: dollList
    };
}