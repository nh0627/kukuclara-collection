import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dollReducer from './dollReducer';
import { typeReducer } from './filterReducer';

export default combineReducers({
    doll: dollReducer,
    type: typeReducer,
    form: formReducer
});
