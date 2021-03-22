import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import mineReducer from "./mineReducer";



const reducers = combineReducers({
    mine: mineReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;
