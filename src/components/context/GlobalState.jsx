import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=200");
      if (!response.ok) {
        setLoading(false);
        setError("Error: Could not fetch data");
        return;
      }

      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <GlobalContext.Provider value={{ error, products, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
