import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../components/context/GlobalState";

const Category = () => {
  const { products } = useContext(GlobalContext);
  const [categorizedProduct, setCategorizedProduct] = useState([]);
  const params = useParams;

  const getCategory = (category) => {
    setCategorizedProduct(
      products?.filter((product) => product?.category === category)
    );
  };

  () => {};

  useEffect(() => {
    getCategory("beauty");
    console.log(params.id);

    // console.log(params.id);
  }, []);
  useEffect(() => {
    console.log(categorizedProduct);
    // console.log(params.id);
  }, [categorizedProduct]);
  return <div>Category</div>;
};

export default Category;
