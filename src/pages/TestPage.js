import React from "react";
import Product from "../Components/Product";

function TestPage(props) {
  return (
    <>
      <div>
        <h1>{props.page}</h1>
      </div>

      <Product />
    </>
  );
}

export default TestPage;
