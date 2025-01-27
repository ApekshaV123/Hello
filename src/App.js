import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [distance,setDistance]=useState("");
  const [check,setCheck]=useState("");
  const transportationModeSelection=()=>{
    if(distance<3){
      setCheck("walk");
    }else if(distance>=3 && distance<=15){
      setCheck("Bike");
    }else if(distance>=15){
      setCheck("car");
    }
  }
  const mode=(event)=>{
    setDistance(event.target.value);
  }
  return (
    <div>
      <h1>Transportation  Mode Selection</h1>
      <input type="number" value={distance} onChange={mode}/>
      <button onClick={transportationModeSelection}>check</button>
      <p>{check}</p>
    </div>
  );
}

export default App;
