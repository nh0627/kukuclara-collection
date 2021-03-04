import { getDolls } from "../../apis/axios/spreadsheets";
import {
    INIT_DOLLS,
    SEARCH_DOLLS,
    FILTER_DOLLS,
    SORT_DOLLS
} from "./types";

// Init list
export const initDolls = () => async dispatch => {
    const dolls = await getDolls();
    dispatch({ type: INIT_DOLLS, payload: { dolls } });
};

// Search with keyword
export const searchDolls = term => async dispatch => {
    const dolls = await getDolls();
    dispatch({
        type: SEARCH_DOLLS,
        payload: { term, dolls }
    });
}

// Filter
export const filterDolls = submitData => async dispatch => {
    const dolls = await getDolls();
    dispatch({
        type: FILTER_DOLLS,
        payload: { submitData, dolls }
    });
};

// Sort
export const sortDolls = condition => async dispatch => {
    const dolls = await getDolls();
    dispatch({
        type: SORT_DOLLS,
        payload: { condition, dolls }
    });
};