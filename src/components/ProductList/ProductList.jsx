import React, { useEffect, useState } from "react";
import { getToys } from "../../services/toys-services.js";
import Card from "../Card/Card.jsx";
import classes from "./ProductList.module.scss";
import Loader from "../Loader/Loader.jsx";
import { toast } from "react-toastify";

const ProductList = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const toysData = await getToys();
        setToys(toysData);
      } catch (error) {
        toast.error(`Error fetching toys: ${error}`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
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
