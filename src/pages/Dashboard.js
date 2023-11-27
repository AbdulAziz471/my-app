import React from "react";
import Card from "../Components/Card";
import "./page.css";
function Dashboard(props) {
  return (
    <>
      <div className="page">
        <h1>{props.page}</h1>
      </div>
      <div className="t-board"></div>

      <Card />
    </>
  );
}

export default Dashboard;
