import {
    FETCH_DOLLS,
    FETCH_DOLL
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_DOLLS:
            // const dolls = {...state, ..._.mapKeys(action.payload, 'kcId') };
            const _dolls = action.payload;
            const dolls = _dolls.map(doll => {
                const obj = {};
                return obj[doll.kcId] = doll;
            });
            debugger;

            return dolls;
        case FETCH_DOLL:
            return { ...state, [action.payload.kcId]: action.payload };
        default:
            return state;
    }
};