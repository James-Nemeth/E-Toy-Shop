import React, { useState } from "react";
import classes from "./Carousel.module.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getStockStatus = (quantity) => {
    if (quantity > 5) {
      return { text: `In Stock: ${quantity}`, color: "lightgreen" };
    } else if (quantity > 0 && quantity <= 5) {
      return { text: `Low Stock: ${quantity}`, color: "orange" };
    } else {
      return { text: "No Stock", color: "red" };
    }
  };

  const { text, color } = getStockStatus(images[currentIndex].quantity);

  return (
    <div className={classes.carousel}>
      <div className={classes.inner}>
        <img
          src={images[currentIndex].imageUrl}
          alt={images[currentIndex].name}
          className={classes.image}
        />
        <div className={classes.details}>
          <h2>{images[currentIndex].name}</h2>
          <p>Price: ${images[currentIndex].price}</p>
          <p style={{ color }}>{text}</p>
        </div>
      </div>
      <button
        className={`${classes.arrow} ${classes.left}`}
        onClick={handlePrev}
      >
        ❮
      </button>
      <button
        className={`${classes.arrow} ${classes.right}`}
        onClick={handleNext}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
