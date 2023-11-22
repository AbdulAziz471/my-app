import Card from "./Card";
import React from "react";

export default function Dashboard() {
  return;
  <>
    {cardData.map((card, index) => (
      <Card key={index} data={card} />
    ))}
  </>;
}
