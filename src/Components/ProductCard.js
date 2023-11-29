import React from "react";
import SubmitButton from "../Components/SubmitButton";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product-container">
        <img
          className="profile"
          src={product.image}
          alt={product.title}
          height={150}
          width={150}
        />
        <h5 className="card-title">{product.title}</h5>
        <SubmitButton />
      </div>

      {/* <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <SubmitButton />
        </div>
      </div> */}
    </>
  );
};

export default ProductCard;
