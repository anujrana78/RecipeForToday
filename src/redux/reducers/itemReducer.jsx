import { ACTION_TYPES } from "../actions/actiontypes"

const initialState = {
    items : []
}

export const itemReducer = (state = initialState,action) => {
    if(action.type === ACTION_TYPES.SET_ITEMS){
        return {...state, items : action.payload}
    }   
    return state
}

export const setItemReducer = (state = {}, action) => {
    if(action.type === ACTION_TYPES.SET_SELECTED_ITEM){
        return{...state,...action.payload}
    }
    return state
}

export const searchItemReducer = (state = {} , action) => {
    if(action.type === ACTION_TYPES.SEARCH_ITEM){
        return {state}
    }
    return state
}

