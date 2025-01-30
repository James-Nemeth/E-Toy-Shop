import { Link } from "react-router";
import classes from "./Card.module.scss";
import Button from "../Button/Button";

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
      {toy.isNew && <div className={classes.newLabel}>New</div>}
      <Link to={`/toy/${toy.id}`} className={classes.cardLink}>
        <img src={toy.imageUrl} alt={toy.name} className={classes.image} />
        <div className={classes.info}>
          <h3>{toy.name}</h3>
          <p>Price: ${toy.price}</p>
          <p className={className}>{text}</p>
        </div>
      </Link>
      <Button>Add To Cart</Button>
    </div>
  );
};

export default Card;
