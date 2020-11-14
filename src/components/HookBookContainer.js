import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyBook } from '../redux'
function HookBookContainer() {
    const noofBooks = useSelector(state => state.noofBooks)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Hook Container</h1>
            <h2>Books: {noofBooks} </h2>
            <button onClick={()=>dispatch(buyBook())}>Buyyy Books</button>
        </div>
    )
}
export default HookBookContainer;