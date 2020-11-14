import React, { useState } from 'react'
import { connect } from 'react-redux'
import {buyBook} from '../redux/index'
function BooksContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
           <h1>Buying books  ..Item:{props.noofBooks}</h1> 
           <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buybook(number)}>Buy {number} books</button>
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
        buybook:(number)=>dispatch(buyBook(number))
    }
}
export default connect(mapStatetoprops,mapDispatchtoprops)(BooksContainer);