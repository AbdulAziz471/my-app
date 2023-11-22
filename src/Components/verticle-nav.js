// VerticleNav.js
import React from "react";

export default function VerticleNav({ selectedCategory, onCategoryChange }) {
  return (
    <>
      <ul className="nav nav-tabs">
        <li
          className={`nav-item ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => onCategoryChange("all")}
        >
          <a className="nav-link" href="#">
            All
          </a>
        </li>
        <li
          className={`nav-item ${selectedCategory === "game" ? "active" : ""}`}
          onClick={() => onCategoryChange("game")}
        >
          <a className="nav-link" href="#">
            Game
          </a>
        </li>
        <li
          className={`nav-item ${selectedCategory === "movie" ? "active" : ""}`}
          onClick={() => onCategoryChange("movie")}
        >
          <a className="nav-link" href="#">
            Movie
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
