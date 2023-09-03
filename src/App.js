import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Furnitures from "./components/Categories-pages/Furnitures";
import Electronics from "./components/Categories-pages/Electronics";
import Bath from "./components/Categories-pages/Bath";
import Kitchen from "./components/Categories-pages/Kitchen";
import Outdoor from "./components/Categories-pages/Outdoor";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";
import Appliances from "./components/Categories-pages/Applianes";
import Toys from "./components/Categories-pages/Toys";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="Furnitures" element={<Furnitures />} />
          <Route path="Appliances" element={<Appliances />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="Toys" element={<Toys />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="Bath" element={<Bath />} />
          <Route path="Outdoor" element={<Outdoor />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
