import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [password,setPassword]=useState("");
  const [check,setCheck]=useState("");
  const passwordChecker=()=>{
    if(password.length<6){
      setCheck("Weak");
    }else if(password.length>=6 && password.length<=10){
      setCheck("Medium");
    }else {
      setCheck("Strong");
    }
  }
  const Strength=(event)=>{
    setPassword(event.target.value);
  }
  return (
    <div>
      <h1>Password Strength Checker</h1>
      <input type="text"value={password} onChange={Strength}/>
      <button onClick={passwordChecker}>Check</button>
      <p>{check}</p>
    </div>
  );
}

export default App;
