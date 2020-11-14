import {buy_book} from './booktype'

const initialState={
    noofBooks:10,   
}

export const bookReducer=(state=initialState,action)=>{
    switch(action.type){
        case buy_book:
            return{
                ...state,
                noofBooks:state.noofBooks-1,
            }
        default:return state
    }
}