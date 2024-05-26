import React from "react";
import { Home, Nav, Category } from "./constants/Imports";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <main className="wrapper left-[50%] translate-x-[-50%] w-[100%] relative overflow-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:id" element={<Category />}></Route>
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
