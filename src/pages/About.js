// src/pages/About.js
import React from 'react';

function About(props) {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of my first React app.</p>
      <h2>This is the {props.page} Page.</h2>
    </div>
  );
}

export default About;
