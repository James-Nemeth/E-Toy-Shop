import React, { useEffect, useState } from "react";
import { getToys } from "../../services/toys-services.js";
import Card from "../Card/Card.jsx";
import classes from "./ProductList.module.scss";
import Loader from "../Loader/Loader.jsx";

const ProductList = () => {
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
    <div className={classes.grid}>
      {toys.length > 0 ? (
        toys.map((toy) => <Card key={toy.id} toy={toy} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductList;
