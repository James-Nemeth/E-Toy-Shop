import React, { useEffect, useState } from "react";
import { getToys } from "../../services/toys-services.js";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Card from "../../components/Card/Card.jsx";
import classes from "./HomePage.module.scss";
import { NavLink } from "react-router";
import Loader from "../../components/Loader/Loader.jsx";

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
    <div className={classes.home}>
      {toys.length > 0 ? <Carousel images={toys.slice(4, 7)} /> : <Loader />}
      <h2 className={classes.title}>Featured Products</h2>
      <div className={classes.grid}>
        {toys.slice(9, 13).map((toy) => (
          <Card key={toy.id} toy={toy} />
        ))}
      </div>
      <div className={classes.btnWrapper}>
        <NavLink className={classes.productBtn} to="/products">
          See More Products
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
