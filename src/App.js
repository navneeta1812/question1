import React, { useState } from 'react';
import './App.css';

function App() {

  const [todoList, settodoList] = useState([])

  const [todo, settodo] = useState('')
 
 
  return (
    <div className="App">
    
        <input type="text" value={todo} placeholder='Add your Todo here' onChange={(e)=>settodo(e.target.value)} />
      
      <br/>
    
      <button
      onClick={()=>{
        if(todo.length >0){
          todoList.push(todo )
          settodoList(todoList)
          settodo('')
        }else{
          alert('Please enter something!')
        }
      }}>Add TODO</button>

  
      
      {
        todoList.map((item) =>(
          <h2>{item}</h2>
        ))
      }


      
     
     

    </div>
  );}

export default App;
