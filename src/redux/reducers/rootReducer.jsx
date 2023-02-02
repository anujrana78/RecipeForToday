import { combineReducers } from "redux";
import {itemReducer, searchItemReducer, setItemReducer } from "./itemReducer";


 const rootReducer = combineReducers({
    allItem : itemReducer,
    setItem : setItemReducer,
    searchItem : searchItemReducer
})

export default rootReducer