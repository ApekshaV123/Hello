import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

function App() {
  const [species,setSpecies]=useState("");
  const [age,setAge]=useState("");
  const [check,setCheck]=useState("");
 const petFoodRecommendationChecker=()=>{
  if(age<=2){
    setCheck("Puppy food");
  }else if(age>5){
    setCheck("Senior Cat Food");
  }
 }
 const food=(event)=>{
  setSpecies(event.target.value);
 }
 const petFood=(event)=>{
  setAge(event.target.value);
 }
  return (
    <div>
      <h1>Pet Food Recommendation</h1>
      <select value={species} onChange={food}>
        <option value={""}>select</option>
        <option value={"dog"}>Dog</option>
        <option value={"cat"}>Cat</option>
      </select>
      <input type="number" value={age} onChange={petFood}/>
      <button onClick={petFoodRecommendationChecker}>Check</button>
      <p>{check}</p>  
    </div>
  );
}

export default App;
