import { ACTION_TYPES } from "./actiontypes";

export const setItems = (items) => {
    return {
        type : ACTION_TYPES.SET_ITEMS,
        payload : items
    }
} 

export const selectedItems = (items) => {
    return {
        type : ACTION_TYPES.SET_SELECTED_ITEM,
        payload : items
    }
}