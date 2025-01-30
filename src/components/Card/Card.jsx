import React from "react";
import classes from "./Card.module.scss";

const getStockStatus = (quantity) => {
  if (quantity > 5) {
    return { text: `In Stock: ${quantity}`, className: classes.inStock };
  } else if (quantity > 0 && quantity <= 5) {
    return { text: `Low Stock: ${quantity}`, className: classes.lowStock };
  } else {
    return { text: "No Stock", className: classes.noStock };
  }
};

const Card = ({ toy }) => {
  const { text, className } = getStockStatus(toy.quantity);

  return (
    <div className={classes.card}>
      <img src={toy.imageUrl} alt={toy.name} className={classes.image} />
      <div className={classes.info}>
        <h3>{toy.name}</h3>
        <p>Price: ${toy.price}</p>
        <p className={className}>{text}</p>
        <button className={classes.btn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
