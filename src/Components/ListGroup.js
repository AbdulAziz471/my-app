import React, { useState } from "react";

export default function ListGroup(props) {
  // const items = [];
  const [selectedindex, setCount] = useState(-1);

  return (
    <>
      <h2>{props.heading}</h2>
      <ul className="list-group">
        {props.items.length === 0 && <p>No items Avalible</p>}
        {props.items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setCount(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
