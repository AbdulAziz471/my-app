import { useState } from "react";
import React from "react";
import Card from "../Components/Card";
import "../Styles/style.css";
// import VerticleNav from "../Components/verticle-nav";
import cardsdata from "../Components/card.json";
import SearchCard from "../Components/SearchCard";
import TestVerticleNav from "../Components/test-verticle-nav";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredCards = cardsdata
    .filter(
      (card) =>
        selectedCategory === "all" ||
        card.catagrey === selectedCategory ||
        card.subcategory === selectedCategory
    )
    .filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <>
      <h1>Game Panel</h1>
      <div>
        <SearchCard onSearchChange={setSearchQuery} searchQuery={searchQuery} />
      </div>
      <div className="panal">
        <div className="side-nav"></div>
        <TestVerticleNav
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div>
          {selectedCategory !== "all" && (
            <div>
              <h2>{selectedCategory.toUpperCase()}</h2>
            </div>
          )}

          <div className="Dashboard">
            {filteredCards.map((card, index) => (
              <div key={index}>
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
