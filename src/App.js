import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [check,setCheck]=useState("");
  const [numbers,setNumber]=useState("");  
  const CountingPositiveNumber=()=>{
    const arr=numbers.split(",");
    let count=0;
    for(let i=0;i<arr.length;i++){
      if(Number(arr[i]) > 0){
       count ++;
      }
    }
    setCheck(count);
  }
  const positiveNumber=(event)=>{
    setNumber(event.target.value);
  }
  return (
    <div>
      <h1>Counting Positive Numbers</h1>
      <input type="text" value={numbers} onChange={positiveNumber}/>
      <button onClick={CountingPositiveNumber}>Calculate</button>
      <p>{check}</p>    
    </div>
  );
}

export default App;
