import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer.js";
import { postReducer } from "./Posts/Reducer.js";
import { commentReducer } from "./Comments/Reducer.js";

const rootReducers = combineReducers({
    auth: authReducer,
    post : postReducer,
    comment: commentReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))