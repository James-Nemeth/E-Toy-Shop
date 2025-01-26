// src/components/HomePage.jsx
import React, { useEffect, useState } from "react";
import { getToys } from "../../services/toys-services.js";
import Carousel from "../../components/Carousel/Carousel.jsx";
import "./HomePage.module.scss";

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
    <div className="home-page">
      {toys.length > 0 ? <Carousel images={toys} /> : <p>Loading toys...</p>}
    </div>
  );
};

export default HomePage;
