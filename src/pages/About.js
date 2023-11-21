// src/pages/About.js
import ListGroup from "../Components/ListGroup";
import React from "react";

function About(props) {
  const countries = ["PAK", "IND", "SIRI", "AUS", "NZ", "SA", "AFG"];
  const heading = "Country Name";
  // const countries = [];

  return (
    <div>
      <h1>{props.page} </h1>
      <p>This is the about page of my first React app.</p>
      <ListGroup heading={heading} items={countries} />
    </div>
  );
}

export default About;
