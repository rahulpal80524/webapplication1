// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tab from './Tab';
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

  let list = todolist.map((value, index) => {
    return (
      <TodDOListItems value={value} key={index} indexNum={index} todolist={todolist} setTodolist={setTodolist} />
    )
  })
  let [uname,setUname] = useState('');
  let [upassword,setUpassword] = useState('');
  let handlesubmit=(event)=>{
    event.preventDefault()
    
  }
  // let getUname=(event)=>{
  //  setUname(event.target.value)
  // }
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={handlesubmit}>
              <div className='text-start'>
                <label>User Name</label>
                <input type='text' onChange={(event)=>setUname(event.target.value)} className='form-control' value={uname}/>
              </div>
              <div className='text-start'>
                <label>Password</label>
                <input type='text' onChange={(event)=>setUpassword(event.target.value)} className='form-control' value={upassword}/>
              </div>
              <div className='text-start'>
               <button>Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Tab />
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


function TodDOListItems({ value, indexNum, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalList = todolist.filter((v, i) => i !== indexNum)
    setTodolist(finalList);
  }

  let checkStatus = () => {
    setStatus(!status)
  }
  return (
    <li onClick={checkStatus} className={`todo-item ${status ? 'complete-todo' : ''}`}>{indexNum + 1}. {value} <span onClick={deleteRow} className="delete-button">&times;</span></li>
  )
}

