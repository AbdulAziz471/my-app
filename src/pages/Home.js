// src/pages/Home.js

import ListGroup from "../Components/ListGroup";
import "./page.css";

function Home(props) {
  const familymembers = ["aziz", "umair", "Zubair", "Uzair", "Usman"];

  return (
    <div>
      <h1>{props.page} </h1>
      <p>Welcome to my first React app!</p>
      <br />
      <ListGroup heading="Family Members" items={familymembers} />
    </div>
  );
}
function Defaultpage(props) {
  const familymember = [];
  return (
    <>
      <Home page={props.page} />
      <ListGroup heading="Family Members" items={familymember} />
    </>
  );
}

export { Home, Defaultpage };
