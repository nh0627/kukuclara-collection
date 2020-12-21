import {
    FETCH_DOLLS,
    SEARCH_DOLLS
} from '../actions/types';

// Fetch doll list
export const fetchDolls = () => {
    return {
        type: FETCH_DOLLS
    };
};

// Search dolls with keyword
export const searchDolls = payload => {
    return {
        type: SEARCH_DOLLS,
        payload
    };
}

// Filter dolls with type
export const filterDollsByType = () => {

};