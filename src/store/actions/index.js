import { loadedDolls, loadDolls } from "../../apis/axios/spreadsheets";
import {
    INIT_DOLLS,
    SEARCH_DOLLS,
    FILTER_DOLLS,
    SORT_DOLLS
} from "./types";

// Init list
export const initDolls = () => async dispatch => {
    await loadDolls();
    dispatch({ type: INIT_DOLLS, payload: { dolls: loadedDolls } });
};

// Search with keyword
export const searchDolls = term => {
    return {
        type: SEARCH_DOLLS,
        payload: { term, dolls: loadedDolls }
    };
}

// Filter
export const filterDolls = submitData => {
    return {
        type: FILTER_DOLLS,
        payload: { submitData, dolls: loadedDolls }
    };
};

// Sort
export const sortDolls = condition => {
    return {
        type: SORT_DOLLS,
        payload: { condition, dolls: loadedDolls }
    };
};