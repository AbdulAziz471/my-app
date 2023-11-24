import React from "react";
import "./page.css";
import TestVerticleNav from "../Components/test-verticle-nav";
function Dashboard(props) {
  return (
    <>
      <div className="page">
        <h1>{props.page}</h1>
      </div>
      <div className="t-board">
        <TestVerticleNav />
        <div className="t-card"></div>
      </div>
    </>
  );
}

export default Dashboard;
