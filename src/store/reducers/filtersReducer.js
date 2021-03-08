import {
    INIT_FILTERS,
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case INIT_FILTERS: {
            const { filters } = action.payload;
            return { ...filters };
        }
        default:
            return state;
    }
};