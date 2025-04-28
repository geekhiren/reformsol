import { combineReducers } from "redux";
// Message Reducer
import { DataUpdateReducer, ExelDataReducer } from "./ExelDataReducer.js";

const reducers = combineReducers({
    ExelDataReducer, DataUpdateReducer
});

export default reducers;