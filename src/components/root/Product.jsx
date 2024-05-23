import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { categories } from "../../constants";
import { Link } from "react-router-dom";

const Product = () => {
  const { products, loading, error } = useContext(GlobalContext);
  const test = products?.map((product) => {
    console.log(product.category);
  });

  return (
    <section className="wrapper">
      <h1>SHOP YOUR FAVOURITE CATEGORY</h1>
      <div className="outerSlider">
        <ul className="innerSlider">
          {categories.map((category) => (
            <li key={category.name}>
              <img src={category.img} alt="" />
              <p>{category.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Product;
