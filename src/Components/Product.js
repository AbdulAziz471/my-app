import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <p>Azios Library</p>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default Product;
