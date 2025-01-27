import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [color,setColor]=useState("");
  const [check,setCheck]=useState("");
 const fruitRipenessChecker=()=>{
  if(color==="green"){
    setCheck("Unripe");
  }else if(color==="yellow"){
    setCheck("ripe");
  }else if(color==="brown"){
    setCheck("Overripe");
  }
 }
 const banana=(event)=>{
  setColor(event.target.value);
 }
  return (
    <div>
    <h1>Fruit Ripeness Checker</h1>
    <select value={color} onChange={banana}>
      <option value={""}>select</option>
      <option value={"green"}>Green</option>
      <option value={"yellow"}>yellow</option>
      <option value={"brown"}>Brown</option>
    </select>
    <button onClick={fruitRipenessChecker}>check</button>
    <p>{check}</p>
    </div>
  );
}

export default App;
