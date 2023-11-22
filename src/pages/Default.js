import { useState } from "react";

export default function Default(props) {
  const [count, setCount] = useState(0); // Initializing state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
