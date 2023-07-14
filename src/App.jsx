import { useState } from 'react';
import './App.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handlerGood = () => {
    setAll(all + 1);
    return setGood(good + 1);
  };
  const handlerNeutral = () => {
    setAll(all + 1);
    return setNeutral(neutral + 1);
  };
  const handlerBad = () => {
    setAll(all + 1);
    return setBad(bad + 1);
  };

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <button onClick={handlerGood}>Good</button>
        <button onClick={handlerNeutral}>Neutral</button>
        <button onClick={handlerBad}>Bad</button>

        <h2>Statics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All Comments: {all}</p>
      </div>
    </>
  );
}

export default App;
