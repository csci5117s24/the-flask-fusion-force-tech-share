import logo from './logo.svg';
import './App.css';
import FlipCard from './FlipCard'
import Avatar from './Avatar'
import { useState } from 'react';


function App() {
  const [data, setData] = useState([
    {front:"hi", back:"a basic greeting"},
    {front:"hello", back:"a wordier greeting"},
    {front:"world", back:"the thing you whatever...."}
  ])
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");

  function newCard() {
    const newCardObj = {front:newFront, back:newBack}
    setData([...data, newCardObj]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.map(datum => 
              <FlipCard onFlip = {()=>alert("flip")}front={datum.front}>{datum.back}</FlipCard>
          )}
        </p>
        <div>
          <input value={newFront} onChange={e=>setNewFront(e.target.value)} placeholder="front"></input>
          <input value={newBack} onChange={e=>setNewBack(e.target.value)} placeholder="back"></input>
          <button onClick={newCard}>Add card</button>
        </div>
      </header>
    </div>
  );
}

export default App;
