import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getToyById } from "../../services/toys-services";
import { useCart } from "../../context/CartContext";
import classes from "./DetailsPage.module.scss";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import { updateDoc, doc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const { toyId } = useParams();
  const { addToCart } = useCart();
  const [toy, setToy] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchToy = async () => {
      try {
        const fetchedToy = await getToyById(toyId);
        setToy(fetchedToy);
        setSelectedImage(fetchedToy.imageUrl);
      } catch (error) {
        console.error("Error fetching toy data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchToy();
  }, [toyId]);

  const handleColourSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleAddToCart = async () => {
    // if the toy exists and has stock
    if (toy && toy.quantity > 0) {
      // adds the toy to the cart
      addToCart(toy);
      // toast success message
      toast.success(`${toy.name} added to cart!`, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // updates the toys quantity locally
      const updatedToy = { ...toy, quantity: toy.quantity - 1 };
      setToy(updatedToy);

      // Update the toys quantity in db
      const toyRef = doc(db, "toys", toy.id);
      await updateDoc(toyRef, { quantity: updatedToy.quantity });
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!toy) {
    return <p>No toy found!</p>;
  }

  return (
    <div className={classes.detailsPage}>
      <h1>{toy.name}</h1>
      <img src={selectedImage} alt={toy.name} className={classes.image} />
      <div className={classes.colourSelector}>
        <h2>Colours: </h2>
        {toy.variants?.map((variant) => (
          <button
            key={variant.id}
            style={{ backgroundColor: variant.colour }}
            className={classes.colourButton}
            onClick={() => handleColourSelect(variant.imageUrl)}
          ></button>
        ))}
      </div>
      <p>
        <strong>Price:</strong> ${toy.price}
      </p>
      <p>
        <strong>Description:</strong> {toy.description}
      </p>
      <p>
        <strong>Stock Status:</strong>{" "}
        {toy.quantity > 0 ? `In Stock: ${toy.quantity}` : "Out of Stock"}
      </p>

      <Button onClick={handleAddToCart} disabled={toy.quantity === 0}>
        {toy.quantity === 0 ? "Out of Stock" : "Add To Cart"}
      </Button>
    </div>
  );
};

export default DetailsPage;
