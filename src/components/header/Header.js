import React, { useState } from "react";
import "./Header.css";
import { GiShoppingCart } from "react-icons/gi";
import { selectAllFood, searchFood } from "../../store/slices/foodSlice";
import { useSelector, useDispatch } from "react-redux";

function Header({ isProductOpen, setIsProductOpen }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const foodData = useSelector(selectAllFood);

  const { amount } = useSelector((store) => store.product);

  const onHandleSearch = (e) => {
    e.preventDefault();
    let selectFood = foodData.find((food) => food.title === input);

    if (selectFood) {
      dispatch(searchFood(selectFood));
    } else {
      alert("No such product found");
    }

    setInput("");
  };

  return (
    <nav className="header">
      <div className="header__container">
        <h1>Food App</h1>
        <form onSubmit={onHandleSearch} className="searchBox">
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button disabled={!input}>Ara</button>
        </form>
      </div>
      <div className="header__right">
        <GiShoppingCart
          className="shoppingCart__Icon"
          onClick={() => setIsProductOpen(!isProductOpen)}
        />
        <span>{amount}</span>
      </div>
    </nav>
  );
}

export default Header;
