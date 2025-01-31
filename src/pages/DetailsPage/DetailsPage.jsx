import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getToyById } from "../../services/toys-services";
import classes from "./DetailsPage.module.scss";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";

const DetailsPage = () => {
  const { toyId } = useParams();
  const [toy, setToy] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

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

      <Button>Add To Cart</Button>
    </div>
  );
};

export default DetailsPage;
