import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import CardList from "./components/CardList/CardList";
import ProductItem from "./components/ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./store/slices/productSlice";

function App() {
  const [isProductOpen, setIsProductOpen] = useState(true);

  const { productData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [productData, dispatch]);

  return (
    <div className="app">
      <Header
        isProductOpen={isProductOpen}
        setIsProductOpen={setIsProductOpen}
      />
      <div className="app__body">
        <CardList />
        {isProductOpen && <ProductItem />}
      </div>
    </div>
  );
}

export default App;
