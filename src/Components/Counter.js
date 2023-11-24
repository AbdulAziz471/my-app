import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const IncreaseCounter = () => {
    setCounter(counter + 1);
  };
  const DecreaseCounter = () => {
    setCounter(counter - 1);
  };
  const ResetCounter = () => {
    setCounter(0);
  };

  const counterArray = Array.from({ length: counter }, (_, index) => index);
  return (
    <>
      <div>
        <h1>My Test Counter</h1>
        <p>The Counter is: {counter}</p>
        <button onClick={IncreaseCounter}>Increment the Counter</button>
        <button onClick={DecreaseCounter}>Decrement the Counter</button>
        <button onClick={ResetCounter}>Reset Counter</button>
        <ul>
          {counterArray.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
