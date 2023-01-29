import { ACTION_TYPES } from "../actions/actiontypes"

const initialState = {
    items : [{
        image : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        title : 'Curly Brown Pasta Pinocho Taste'
      },
      {
        image : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        title : 'Curly Brown Pasta Pinocho Taste'
      }],
    selectedItem :[ {
        image : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        title : 'Curly Brown Pasta Pinocho Taste'
      }]
}

const itemReducer = (state = initialState,action) => {
    if(action.type === ACTION_TYPES.SET_ITEMS){
        return {
            state
        }
    }
    return state
}

export default itemReducer  