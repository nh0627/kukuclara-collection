import spreadsheets from "../../apis/axios/spreadsheets";
import { parseSpreadSheet } from "../../common/util";
import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FILTER_DOLLS,
    SORT_DOLLS
} from "./types";

// Fetch list
export const fetchDolls = () => async dispatch => {
    const response = await spreadsheets.get();
    const parsedDolls = parseSpreadSheet(response);
    dispatch({ type: FETCH_DOLLS, payload: { dolls: parsedDolls } });
};

// Search with keyword
export const searchDolls = term => async dispatch => {
    const response = await spreadsheets.get();
    const parsedDolls = parseSpreadSheet(response);
    dispatch({
        type: SEARCH_DOLLS,
        payload: { term, dolls: parsedDolls }
    });
}

// Filter
export const filterDolls = submitData => async dispatch => {
    const response = await spreadsheets.get();
    const parsedDolls = parseSpreadSheet(response);
    dispatch({
        type: FILTER_DOLLS,
        payload: { submitData, dolls: parsedDolls }
    });
};

// Sort
export const sortDolls = condition => async dispatch => {
    const response = await spreadsheets.get();
    const parsedDolls = parseSpreadSheet(response);
    dispatch({
        type: SORT_DOLLS,
        payload: { condition, dolls: parsedDolls }
    });
};