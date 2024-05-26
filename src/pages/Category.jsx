import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../components/context/GlobalState";

const Category = () => {
  const { products } = useContext(GlobalContext);
  const [categorizedProduct, setCategorizedProduct] = useState([]);
  const { category } = useParams();

  const getCategory = (category) => {
    setCategorizedProduct(
      products?.filter((product) => product?.category === category)
    );
  };

  () => {};

  useEffect(() => {
    getCategory(category);
  }, [products]);

  return (
    <section className="mt-10 relative w-[100%]">
      <h1 className="text-lg">Deals on {category}</h1>
      <p className="text-center w-[100%] text-sm text-black/65">
        {categorizedProduct.length} items
      </p>
      <main className="max-md:flex-col flxCenter relative">
        <section className="md:w-[30%] relative md:h-[400vh] bg-yellow-50">
          <div className="sticky top-10 bg-red-600">Filter</div>
        </section>
        <section className="md:w-[70%]  relative md:h-[400vh]">
          {categorizedProduct.map((product) => (
            <div>
              <h1 className="space-x-1">
                <span className="">{product.brand}</span>
                <span>{product.title}</span>
                <span>Ratings: {product.rating}</span>
              </h1>

              <img src={product.images[0]} alt="" />
              <main>
                <p>${product.price}</p>
                <p>
                  From ${Math.floor(eval(product.price / 12))} per month over 12
                  months
                </p>
              </main>
              <aside className="flxCenter flex-col gap-2">
                <p>Delivery available</p>
                <p>Free collection</p>
                <button className="bg-red-500 rounded-full text-white text-sm py-1">
                  Add to Basket
                </button>
                <button className="border-[1px] rounded-full text-sm py-1">
                  Add to Favourites
                </button>
              </aside>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
};

export default Category;
