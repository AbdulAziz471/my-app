// src/pages/Home.js
import { useState } from "react";
import React from "react";
import Card from "../Components/Card";
import "../Styles/style.css";
import VerticleNav from "../Components/verticle-nav";
import cardsdata from "../Components/card.json";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards =
    selectedCategory === "all"
      ? cardsdata
      : cardsdata.filter((card) => card.catagrey === selectedCategory);

  return (
    <>
      <h1>Game Panel</h1>
      <div>
        <VerticleNav
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="Dashboard">
        {filteredCards.map((card, index) => (
          <div key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </>
  );
}
