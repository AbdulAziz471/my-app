import React from "react";
// import { useState } from "react";

export default function VerticleNav({ selectedCategory, onCategoryChange }) {
  return (
    <>
      <div className="verticle-nav">
        <ul className="nav nav-tabs">
          <li
            className={`nav-item ${selectedCategory == "all" ? "active" : ""}`}
            onClick={() => onCategoryChange("all")}
          >
            <a className="nav-link" href="#">
              All
            </a>
          </li>
          <li
            className={`nav-item ${
              selectedCategory === "game" ? "active" : ""
            }`}
            onClick={() => onCategoryChange("game")}
          >
            <a className="nav-link" href="#">
              Game
            </a>
          </li>
          <li
            className={`nav-item ${
              selectedCategory === "movie" ? "active" : ""
            }`}
            onClick={() => onCategoryChange("movie")}
          >
            <a className="nav-link" href="#">
              Movie
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
