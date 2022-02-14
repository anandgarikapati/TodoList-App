import React from 'react'
import './List.css'

const List = ({todoList, deleteHandler}) => {
    
    // console.log(todoList)
    return(
        <div>
            {
                todoList.map((todo, index) => {
                  return   <div key={index}>
                             <h5 className='items'>{todo}  &nbsp;  &nbsp; <button className='btn' type='' onClick={() => deleteHandler(index)}>Delete</button></h5> 
                           </div>
                })
            }
        </div>
    )
}

export default List