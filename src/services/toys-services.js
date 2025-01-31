import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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

export const getToyById = async (toyId) => {
  const toyDocRef = doc(db, "toys", toyId);
  const toyDoc = await getDoc(toyDocRef);

  if (!toyDoc.exists()) {
    throw new Error("Toy not found");
  }

  const toyData = { id: toyDoc.id, ...toyDoc.data() };

  const variantsRef = collection(toyDocRef, "variants");
  const variantsSnap = await getDocs(variantsRef);
  const variants = variantsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return { ...toyData, variants };
};



