import { combineReducers } from "redux";
// Message Reducer
import { BlogExelDataReducer, ServiceExelDataReducer } from "./ExelDataReducer.js";

const reducers = combineReducers({
    ServiceExelDataReducer, BlogExelDataReducer
});

export default reducers;