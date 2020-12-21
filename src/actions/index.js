import dollData from '../data/kukuclara.json';
import {
    FETCH_DOLLS,
    FETCH_DOLL
} from '../actions/types';

const dolls = JSON.parse(JSON.stringify(dollData));
 
export const fetchDolls = () => {
    const dollList = dolls;
    // 페이징 처리
    return {
        type: FETCH_DOLLS,
        payload: dollList
    };
};

export const searchDolls = formValue => {
    const { term } = formValue;
    const dollList = dolls.filter(doll => {
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