import {ADD_TO_CART} from '../constants'
const initialState = {
   cardItem: [] 
}

export default function cardItem(state=initialState, action){
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cardItem: action.data
            }
            break;
    
        default:
           return state
    }
}