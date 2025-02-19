import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firestore.js";

export const getToys = async () => {
  // references toy collection
  const toysCollectionRef = collection(db, "toys"); 
  const snapshot = await getDocs(toysCollectionRef); 

  // converts documents into an array
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Gets a toy by ID and its variants.
export const getToyById = async (toyId) => {
  // Reference to the toy document
  const toyDocRef = doc(db, "toys", toyId); 
  // Fetch toy data
  const toyDoc = await getDoc(toyDocRef); 

  // error handling
  if (!toyDoc.exists()) {
    throw new Error("Toy not found");
  }

  // Get toy details
  const toyData = { id: toyDoc.id, ...toyDoc.data() };

  // Get toy variants
  const variantsRef = collection(toyDocRef, "variants");
  const variantsSnap = await getDocs(variantsRef);

  // Convert variant documents into an array
  const variants = variantsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return { ...toyData, variants };
};




