import {
    FETCH_DOLLS,
    FETCH_DOLL
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_DOLLS:
            const dolls = {};
            action.payload.forEach( doll => dolls[doll.id] = doll);
            return dolls;
        case FETCH_DOLL:
            return { ...state, [action.payload.kcId]: action.payload };
        default:
            return state;
    }
};