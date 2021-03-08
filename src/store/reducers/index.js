import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dollsReducer from "./dollsReducer";
import filtersReducer from "./filtersReducer";

export default combineReducers({
    dolls: dollsReducer,
    filters: filtersReducer,
    form: formReducer
});
