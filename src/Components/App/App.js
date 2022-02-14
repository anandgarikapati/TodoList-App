import React, {useState} from 'react'
import './App.css';
import Header from '../Header/Header';
import List from '../List/List';

function App() {
  const [task, setTask] = useState("")
  const [todos,setTodos] = useState([])

  const onChangeHandler = (e) => {
    // e.preventDefault()
    setTask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(task)
    const newTodos = [...todos, task]
    setTodos(newTodos)
    setTask('')
    
     
  }

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue)
    setTodos(newTodos)
  }

  return(
    <div>
      <Header/>
    
    <div >
      <div className='formcontainer'>

        <div>
          <form onSubmit={submitHandler}>
            <input type='text' value={task} onChange={onChangeHandler}></input> &nbsp; &nbsp;
            <input type='submit' value='Add'></input>
          </form>
          <br></br>
          <List todoList = {todos} deleteHandler = {deleteHandler}/>
        </div>

      </div>
   
      
    </div>
    </div>
  )
}

export default App;
