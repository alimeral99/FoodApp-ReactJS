import React from "react";
import { removeItem } from "../../store/slices/productSlice";
import "./ProductItem.css";
import { useSelector, useDispatch } from "react-redux";

function ProductItem() {
  const dispatch = useDispatch();
  const { productData, total } = useSelector((store) => store.product);

  const deleteProduct = (id) => {
    dispatch(removeItem(id));
  };

  const renderedProduct = productData.map((product) => (
    <div className="product" key={product.id}>
      <div className="product__img">
        <img src={product.img} alt={product.title} />
      </div>
      <h2 className="product__title">{product.title}</h2>
      <p className="product__price">{product.price} $</p>
      <p>x {product.amount}</p>
      <span
        className="delete__product"
        onClick={() => deleteProduct(product.id)}
      >
        X
      </span>
    </div>
  ));

  return (
    <div className="productItem">
      {renderedProduct}

      <div className="product__total">
        <p>Total</p>
        <p>{total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductItem;
