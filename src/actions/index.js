import {
    FETCH_DOLLS,
    SEARCH_DOLLS,
    FILTER_DOLLS,
    SORT_DOLLS
} from "../actions/types";

// Fetch list
export const fetchDolls = () => {
    return {
        type: FETCH_DOLLS
    };
};

// Search with keyword
export const searchDolls = payload => {
    return {
        type: SEARCH_DOLLS,
        payload
    };
}

// Filter
export const filterDolls = payload => {
    return {
        type: FILTER_DOLLS,
        payload
    };
};

// Sort
export const sortDolls = payload => {
    return {
        type: SORT_DOLLS,
        payload
    };
};