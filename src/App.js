import logo from './logo.svg';
import './App.css';
import Header from './Header';
import weblog from "./Images/download.jpeg"
import { useState } from 'react';
function App() {
  let temp = '';
  let [count, setCount]=useState(1)
  let [pShow, setPshow]=useState(false)

  if(pShow){
    // temp=<>
    // <button onClick={()=>setPshow(!pShow)}>Hide</button>
    // <p>value is false</p>
    // </>
    temp=<Card/>
  }else{
    temp=<button className='bg-[green] p-10px' onClick={()=>setPshow(!pShow)}>Show</button>
  }

  let displayData=()=>{
    setCount(count+1)
  
  }

  let message=(a,b)=>{
   console.log(a+b)
  }


  return (
    <div className="App">
      {temp}
      <div>
      {count}
      </div>
      {/* <button className='bg-[red] p-[]10px' onClick={()=>message(12,34)}>parameter use</button>  */}
      <button className='bg-[red] p-[]10px' onClick={displayData}>Save</button>
      {/* <button className='bg-[red] p-[]10px' onClick={displayData()}>Save</button>  if displayData() auto function call if page is load*/}
      
      <Header/>
      <img src= {weblog}/>
      <h1 className='text-[40px] text-red-200'> welcome to web application 1</h1>
    </div>
  );
}

export default App;

let Card=()=>{
   return(
    <h1>welcome to this page</h1>
   )
}