import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [size, setSize] = useState("");
  const [extraShot, setExtrashot] = useState("");
  const [check, setCheck] = useState("");
  const coffeeCustomization = () => {
    if(size==="small" && extraShot==="order"){
      setCheck("small with an option for extra shot espresso");
    } else if(size==="medium" && extraShot==="order"){
      setCheck("medium with an option for extra shot espresso");
    } else if(size==="large" && extraShot==="order"){
      setCheck("large with an option for extra shot espresso");
    }
  }
  const customerOrder=(event)=>{
    setSize(event.target.value);
  }

  const order = (event) => {
    setExtrashot(event.target.value);
  }
  return (
    <div>
      <h1>Coffee Customization</h1>
      <select value={size} onChange={customerOrder}>
        <option value={""}>select</option>
        <option value={"small"}>Small</option>
        <option value={"medium"}>Medium</option>
        <option value={"large"}>Large</option>
      </select>
      <input type="text" value={extraShot} onChange={order} />
      <button onClick={coffeeCustomization}>check</button>
      <div>{check}</div>
    </div>
  );
}

export default App;
