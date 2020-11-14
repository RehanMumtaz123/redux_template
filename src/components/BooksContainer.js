import React from 'react'
import { connect } from 'react-redux'
import {buyBook} from '../redux/index'
function BooksContainer(props) {
    return (
        <div>
           <h1>Buyning books ..Item:{props.noofBooks}</h1> 
           <button onClick={props.buybook}>Buy</button>
        </div>
    )
}
const mapStatetoprops=(state)=>{
    return{ 
        noofBooks:state.noofBooks
    }
}
const mapDispatchtoprops=(dispatch)=>{
    return{
        buybook:()=>dispatch(buyBook())
    }
}
export default connect(mapStatetoprops,mapDispatchtoprops)(BooksContainer);