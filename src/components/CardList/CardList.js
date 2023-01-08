import React from "react";
import "./CardList.css";
import { useSelector, useDispatch } from "react-redux";
import { selectProductData } from "../../store/slices/productSlice";
import { addItem, addSpesificAmount } from "../../store/slices/productSlice";
import { backFood } from "../../store/slices/foodSlice";
function CardList() {
  const dispatch = useDispatch();
  const productData = useSelector(selectProductData);
  const { filter } = useSelector((state) => state.food);

  const onHandleProduct = (food) => {
    //Daha önce aynı ürün alınmışsa
    const checkProduct = productData.find((product) => product.id === food.id);
    if (checkProduct) {
      dispatch(addSpesificAmount(checkProduct));
    } else {
      dispatch(addItem(food));
    }
  };

  const foodData = useSelector((state) => {
    const all = state.food.foodData;
    const filterId = state.food.filter;

    if (filterId === null) {
      return all;
    } else {
      return all.filter((food) => food.id === filterId);
    }
  });

  const renderedFood = foodData.map((food) => {
    return (
      <div className="card" key={food.id}>
        <img className="card__img" src={food.img} alt={food.title} />
        <div className="card__content">
          <h2 className="card__title">{food.title}</h2>
          <p className="card__price">{food.price}</p>
        </div>
        <button onClick={() => onHandleProduct(food)} className="card__btn">
          Add
        </button>
      </div>
    );
  });

  return (
    <div className="card__list">
      {renderedFood}

      {filter && (
        <button
          className="backFood__btn"
          onClick={() => dispatch(backFood(null))}
        >
          Back Menu
        </button>
      )}
    </div>
  );
}

export default CardList;
