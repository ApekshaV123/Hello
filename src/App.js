import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [price, setPrice] = useState(0);
  const movieTicketPricingCheck = () => {
    const todaysDate = new Date();
    const WeekDays = ["sunday", "Monday", "tuesday", "wednesday", "Thursday", "friday", "satursday"];
    const todaysDay = todaysDate.getDay();
    console.log(todaysDay);
    let tempPrice = 0;
    if (age < 18) {
      tempPrice = 8;
    } else if (age >= 18) {
      tempPrice = 12;
    }
    if (WeekDays[todaysDay]==="satursday") {
      setPrice(tempPrice - 2); 
    }else{
      setPrice(tempPrice);
    }
  }
  const check = (event) => {
    setAge(event.target.value);
  }
  return (
    <div>
      <h1>Movie Ticket Pricing</h1>
      <input type="number" value={age} onChange={check} />
      <button onClick={movieTicketPricingCheck}>Check</button>
      <p>{price}</p>
    </div>
  );
}

export default App;
