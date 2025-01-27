import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [leapYear,setLeapYear]=useState("");
  const [check,setCheck]=useState("");
  const leapYearChecker=()=>{
    if((leapYear%4===0 && leapYear%100!==0) ||leapYear%400===0 ){
      setCheck("leapyear")
    }else{
      setCheck("Not leapyear")
    }
  }
  const year=(event)=>{
    setLeapYear(event.target.value);
  }
  return (
    <div>
      <h1>Leap Year Checker</h1>
      <input type="number" value={leapYear} onChange={year}/>
      <button onClick={leapYearChecker}>Check</button>
      <p>{check}</p>
    </div>
  );
}

export default App;
