import { useState } from "react";
import Counter from "../Components/Counter";
import ToDo from "../Components/ToDoList";
import Gallery from "../Components/Gallery";
export default function Default(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <Gallery />
      <ToDo />

      <Counter />
    </>
  );
}
