import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { dollsReducer, selectedDollReducer } from './dollReducer';
import { typesReducer } from './filterReducer';

export default combineReducers({
    form: formReducer,
    dolls: dollsReducer,
    types: typesReducer,
    selectedDoll: selectedDollReducer
});
