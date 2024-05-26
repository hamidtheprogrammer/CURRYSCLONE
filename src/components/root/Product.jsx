import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { bigBrands, categories } from "../../constants";
import { Link } from "react-router-dom";

const Product = () => {
  const { products, loading, error } = useContext(GlobalContext);
  const [popularProducts, setPopularProducts] = useState([]);

  // const test = () =>
  //   products?.map((product) => {
  //     console.log(product.category);
  //   });

  useEffect(() => {
    const getPopularProducts = () => {
      if (products.length > 20) {
        setPopularProducts([]);
        let count = 0;
        while (count < 10) {
          let id = Math.floor(Math.random() * (20 - 1) + 1);
          setPopularProducts((prevPopularProduct) => [
            ...prevPopularProduct,
            products?.find((product) => product.id === id),
          ]);
          count++;
        }
      }
    };

    getPopularProducts();
  }, [products]);

  return (
    <section className="relative mt-14 wrapper w-[100%] itemsCenter flex-col text-black/70 text-center">
      <h1 className="font-bold">Shop by your favourite category</h1>

      <div className="outerSlider  my-12">
        <ul className="innerSlider flxCenter gap-4">
          {categories.map((category) => (
            <Link
              className="itemsCenter flex-col gap-2 cursor-pointer min-w-[150px]"
              key={category.name}
              to={`/product/category/${category.name}`}
            >
              <img className="rounded-md" src={category.img} alt="" />
              <p className="text-sm">{category.name}</p>
            </Link>
          ))}
        </ul>
      </div>
      <h1 className="font-bold my-2">POPULAR PRODUCTS</h1>
      <div className="outerSlider  mt-7">
        <ul className="innerSlider flxCenter gap-4 ">
          {popularProducts?.length &&
            popularProducts.map((product) => (
              <Link
                className="max-h-[400px] aspect-w-10 aspect-h-15 itemsCenter flex-col gap-2 cursor-pointer w-[30vw] max-w-[300px] rounded-lg min-w-[200px]"
                key={product.title}
              >
                <img
                  className="relative h-[60%]"
                  src={product.images[0]}
                  alt=""
                />
                <p className="relative pt-4 text-sm h-[40%] w-[100%] underline ">
                  {product.title}
                </p>
              </Link>
            ))}
        </ul>
      </div>
      <h1 className="font-bold mt-8">Big brands</h1>
      <div className="outerSlider  mt-7">
        <ul className="innerSlider flxCenter gap-4 ">
          {bigBrands?.length &&
            bigBrands.map((brand) => (
              <Link
                className="max-h-[400px] itemsCenter flex-col gap-2 cursor-pointer bg-black/[0.05] w-[30vw] max-w-[300px] rounded-lg min-w-[200px] overflow-hidden"
                key={brand.name}
              >
                <img className="relative h-[60%] " src={brand.img} alt="" />
                <div className=" p-4">
                  <p className="relative pt-4 text-sm h-[40%] w-[100%] ">
                    {brand.name}
                  </p>
                  <p className="text-red-500 text-sm mt-3">{brand.content}</p>
                </div>
              </Link>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Product;
