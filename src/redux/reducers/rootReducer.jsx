import { combineReducers } from "redux";
import {itemReducer, setItemReducer } from "./itemReducer";


 const rootReducer = combineReducers({
    allItem : itemReducer,
    setItem : setItemReducer
})

export default rootReducer