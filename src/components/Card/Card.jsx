import { Link } from "react-router";
import classes from "./Card.module.scss";
import Button from "../Button/Button";
import { useCart } from "../../context/CartContext";
import { updateDoc, doc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { getStockStatus } from "../../utils/stockUtils";

const Card = ({ toy }) => {
  const { addToCart } = useCart();
  const db = getFirestore();
  const [currentToy, setCurrentToy] = useState(toy);
  const { text, className } = getStockStatus(currentToy.quantity);

  const handleAddToCart = async () => {
    if (currentToy.quantity > 0) {
      addToCart(currentToy);
      toast.success(`${toy.name} added to cart!`, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      const updatedToy = { ...currentToy, quantity: currentToy.quantity - 1 };
      setCurrentToy(updatedToy);

      const toyRef = doc(db, "toys", currentToy.id);
      await updateDoc(toyRef, {
        quantity: updatedToy.quantity,
      });
    }
  };

  return (
    <div className={classes.card}>
      {currentToy.isNew && <div className={classes.newLabel}>New</div>}
      <Link to={`/toy/${toy.id}`} className={classes.cardLink}>
        <img
          src={currentToy.imageUrl}
          alt={currentToy.name}
          className={classes.image}
        />
        <div className={classes.info}>
          <h3>{currentToy.name}</h3>
          <p>Price: ${currentToy.price}</p>
          <p className={classes[className]}>{text}</p>
        </div>
      </Link>
      <Button onClick={handleAddToCart} disabled={currentToy.quantity === 0}>
        {currentToy.quantity === 0 ? "Out of Stock" : "Add To Cart"}
      </Button>
    </div>
  );
};

export default Card;
