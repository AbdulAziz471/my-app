import React, { useState } from "react";

export default function ToDo() {
  const [num, setNum] = useState(0);
  function handlenumber() {
    setnum(num + 1);
  }
  return (
    <>
      <h1>To Do List</h1>
      <button onClick={handlenumber}>Clicked{num}</button>
      <p>{num}</p>
    </>
  );
}
