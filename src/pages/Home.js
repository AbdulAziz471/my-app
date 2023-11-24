import { useState } from "react";
import React from "react";
import Card from "../Components/Card";
import "../Styles/style.css";
import VerticleNav from "../Components/verticle-nav";
import cardsdata from "../Components/card.json";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards = cardsdata
    .filter(
      (card) => selectedCategory === "all" || card.catagrey === selectedCategory
    )
    .filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <h1>Game Panel</h1>
      <div>
        <VerticleNav
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearchChange={setSearchQuery}
          searchQuery={searchQuery}
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
