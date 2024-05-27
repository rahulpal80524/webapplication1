import logo from './logo.svg';
import './App.css';
import Header from './Header';
import weblog from "./Images/download.jpeg"
function App() {
  let displayData=()=>{
    alert("Welcome")
  }

  let message=(a,b)=>{
   console.log(a+b)
  }

  return (
    <div className="App">
      <button className='bg-[red] p-[]10px' onClick={()=>message(12,34)}>parameter use</button> 
      <button className='bg-[red] p-[]10px' onClick={displayData}>Save</button>
      {/* <button className='bg-[red] p-[]10px' onClick={displayData()}>Save</button>  if displayData() auto function call if page is load*/}

      <Header/>
      <img src= {weblog}/>
      <h1 className='text-[40px] text-red-200'> welcome to web application 1</h1>
    </div>
  );
}

export default App;
