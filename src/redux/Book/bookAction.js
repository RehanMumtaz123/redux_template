import {buy_book} from './booktype'

export const buyBook=(number=1)=>{
    return{
        type : buy_book,
        payload:number,
    }
}