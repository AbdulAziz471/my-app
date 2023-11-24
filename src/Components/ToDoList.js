import React, { useState } from "react";

export default function ToDo() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    const newNumber = numbers.length + 1;
    setNumbers([...numbers, newNumber]);
  };

  return (
    <>
      <div>
        <button onClick={addNumber}>Add Number</button>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
