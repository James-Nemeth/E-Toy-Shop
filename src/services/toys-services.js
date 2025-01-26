// src/services/toys-service.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore.js";

export const getToys = async () => {
  const toysCollectionRef = collection(db, "toys");
  const snapshot = await getDocs(toysCollectionRef);
  const toysList = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return toysList;
};
