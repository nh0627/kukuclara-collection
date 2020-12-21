import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dollsReducer from './dollsReducer';
import { typesReducer } from './filtersReducer';

export default combineReducers({
    dolls: dollsReducer,
    types: typesReducer,
    form: formReducer
});
