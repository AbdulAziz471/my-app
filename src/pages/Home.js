// src/pages/Home.js
import React from "react";

import "./page.css";
function Home(props) {
  return (
      <div>
        <h1> I am main Page </h1>
        <h2>Home Page</h2>
        <p>Welcome to the home page of my first React app!</p>
        <h2>This is the {props.page} Page.</h2>
      </div>

      
  );
}
function Defaultpage(props) {
  return(
    <>
    <h1>Main Page: {props.page}  </h1>
    <Home page = {props.page} />
     </>
  )
}
export { Home, Defaultpage };

