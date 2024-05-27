import logo from './logo.svg';
import './App.css';
import Header from './Header';
import weblog from "./Images/download.jpeg"
import { useState } from 'react';
function App() {
  let [count, setCount]=useState(1)

  let displayData=()=>{
     setCount(count+1)
   
  }

  // let message=(a,b)=>{
  //  console.log(a+b)
  // }


  return (
    <div className="App">
      {count}
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
