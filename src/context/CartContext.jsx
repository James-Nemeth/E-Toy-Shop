import { createContext, useContext, useEffect, useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firestore";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // init cart state from localStorage or an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // localStorage updates when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add a toy to the cart
  const addToCart = (toy) => {
    const existingItem = cart.find((item) => item.id === toy.id);

    if (existingItem) {
      // if a toy with the same id already exists in cart, add 1 to the amount instead of adding another toy
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === toy.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // new items default to 1
      setCart([...cart, { ...toy, quantity: 1 }]);
    }
  };

  // remove a toy from the cart, update db
  const removeFromCart = async (toy) => {
    // remove the toy from the cart
    setCart((prevCart) => prevCart.filter((item) => item.id !== toy.id));

    const toyRef = doc(db, "toys", toy.id);
    const toySnapshot = await getDoc(toyRef);

    if (toySnapshot.exists()) {
      // if the toy is removed, change the database quantity
      const newQuantity = toySnapshot.data().quantity + toy.quantity;
      await updateDoc(toyRef, { quantity: newQuantity });
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
