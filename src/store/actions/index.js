import spreadsheets from "../../apis/axios/spreadsheets";
import { parseSpreadSheet } from "../../common/util";
import {
    INIT_DOLLS,
    SEARCH_DOLLS,
    FILTER_DOLLS,
    SORT_DOLLS
} from "./types";

let loadedDolls = [];
const loadDolls = async () => {
    const response = await spreadsheets.get();
    const parsedDolls = parseSpreadSheet(response);
    loadedDolls = parsedDolls;
};

// Init list
export const initDolls = () => async dispatch => {
    await loadDolls();
    dispatch({ type: INIT_DOLLS, payload: { dolls: loadedDolls } });
};

// Search with keyword
export const searchDolls = term => async dispatch => {
    dispatch({
        type: SEARCH_DOLLS,
        payload: { term, dolls: loadedDolls }
    });
}

// Filter
export const filterDolls = submitData => async dispatch => {
    dispatch({
        type: FILTER_DOLLS,
        payload: { submitData, dolls: loadedDolls }
    });
};

// Sort
export const sortDolls = condition => async dispatch => {
    dispatch({
        type: SORT_DOLLS,
        payload: { condition, dolls: loadedDolls }
    });
};