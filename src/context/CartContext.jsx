import { createContext, useContext, useEffect, useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firestore";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (toy) => {
    const existingItem = cart.find((item) => item.id === toy.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === toy.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...toy, quantity: 1 }]);
    }
  };

  const removeFromCart = async (toy) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== toy.id));

    const toyRef = doc(db, "toys", toy.id);
    const toySnapshot = await getDoc(toyRef);
    if (toySnapshot.exists()) {
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
