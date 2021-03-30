import { getDolls, getFilters } from "../../apis/axios/spreadsheets";
import {
    INIT_DOLLS,
    INIT_FILTERS,
    FILTER_DOLLS,
    SORT_DOLLS
} from "./types";

// Init doll list
export const initDolls = () => async dispatch => {
    const dolls = await getDolls();
    dispatch({ type: INIT_DOLLS, payload: { dolls } });
};

// Init filter list
export const initFilters = () => async dispatch => {
    const filters = await getFilters();
    dispatch({ type: INIT_FILTERS, payload: { filters } });
};

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