import React, { useEffect, useState } from "react";
import { getToys } from "../../services/toys-services.js";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Card from "../../components/Card/Card.jsx";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const toysData = await getToys();
        setToys(toysData);
      } catch (error) {
        console.error("Error fetching toys:", error);
      }
    };

    fetchToys();
  }, []);

  return (
    <div className={classes["home-page"]}>
      {toys.length > 0 ? <Carousel images={toys} /> : <p>Loading toys...</p>}

      {/* Featured Products Section */}
      <h2 className={classes["section-title"]}>Featured Products</h2>
      <div className={classes["product-grid"]}>
        {toys.slice(0, 4).map((toy) => (
          <Card key={toy.id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
