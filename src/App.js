import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [weather, setWeather] = useState("");
  const [check, setCheck] = useState("");
  const weatherActivitySuggestion = () => {
    if (weather === "Sunny") {
      setCheck("Go for a Walk");
    } else if (weather === "Rainy") {
      setCheck("Read a book");
    } else if (weather === "Snowy") {
      setCheck("Build a snowman");

    }
  }

  const season = (event) => {
    setWeather(event.target.value);
  }
  return (
    <div>
      <h1>Weather Activity Suggestion</h1>
      <input type="text" value={weather} onChange={season} />
      <button onClick={weatherActivitySuggestion}>check</button>
      <p>{check}</p>
    </div>
  );
}

export default App;
