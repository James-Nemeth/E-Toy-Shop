import React, { useState } from "react";
import classes from "./Carousel.module.scss";
import { getStockStatus } from "../../utils/stockUtils";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // going to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // going to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
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
