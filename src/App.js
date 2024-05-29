import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {
    
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalToDoList = [...todolist, toname]
      setTodolist(finalToDoList);
    } else {
      alert("ToDo name already present");
    }
    event.preventDefault();
  }

  let list = todolist.map((value, index)=>{
    return(
      <TodDOListItems  value={value} key={index} indexNum={index} todolist={todolist} setTodolist={setTodolist}/>
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form className="todo-form" onSubmit={saveToDoList}>
        <input type="text" name='toname' className="todo-input" placeholder="Enter your task" />
        <button className="todo-button">Save</button>
      </form>
      <div className='outerDiv'>
        <ul className="todo-list">
          {list}
        </ul>
      </div>
    </div>

  );
}

export default App;


function TodDOListItems({value, indexNum, todolist, setTodolist}){
  let [status, setStatus] = useState(false);
  let deleteRow=()=>{
   let finalList = todolist.filter((v,i)=>i!=indexNum)
   setTodolist(finalList);
  }
 
  let checkStatus=()=>{
    setStatus(!status)
  }
  return(
    <li onClick={checkStatus} className={`todo-item ${status ? 'complete-todo' : ''}`}>{indexNum+1}. {value} <span onClick={deleteRow} className="delete-button">&times;</span></li>
  )
}

