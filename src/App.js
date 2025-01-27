import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [score,setScore]=useState(0);
  const [check,setCheck]=useState(0);

  const calculatorCheck=()=>{
    
    if(score>=90){
      setCheck('A');
    }else if(score>=80){
      setCheck('B');
    }else if(score>=70){
      setCheck('c');
    }else if(score>=60){
      setCheck('D');
    }else{
      setCheck('F');
    }

  }
  const grade=(event)=>{
    setScore(event.target.value);
  }
  
  return (
    <div>
     <h1>Grade Checker</h1>
     <input type="number" value={score} onChange={grade}/>
     <button onClick={calculatorCheck}>calculator</button>
     <p>{check}</p>
    </div>
  );
}

export default App;
