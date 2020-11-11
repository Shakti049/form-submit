import { combineReducers } from "redux";

// import of reducer
import { reducer } from "./reducer"


// combineReducers is used to combine all the reducers into single one with the capability of naming the reducer as such
export const allReducers = combineReducers({
    eventReducer: reducer,
});