import { useCart } from "../../context/CartContext";
import classes from "./CartPage.module.scss";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className={classes.cartPage}>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <h2>Please add a toy to the cart.</h2>
      ) : (
        cart.map((toy) => (
          <div key={toy.id} className={classes.cartItem}>
            <img src={toy.imageUrl} alt={toy.name} className={classes.image} />
            <div>
              <h3>{toy.name}</h3>
              <p>
                <strong>Price:</strong> ${toy.price}
              </p>
              <p>
                <strong>Amount:</strong> {toy.quantity}
              </p>
              <button onClick={() => removeFromCart(toy)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
