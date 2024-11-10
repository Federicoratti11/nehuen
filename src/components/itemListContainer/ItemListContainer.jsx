import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { idCategoria } = useParams();

  const getProduct = () => {
    const collectionNombre = collection(db, "products");
    getDocs(collectionNombre).then((dataDb) => {
      const productsDb = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(productsDb);
    });
  };

  const getProductsByCategoria = () => {
    const collectionNombre = collection(db, "products");
    const q = query(collectionNombre, where("categoria", "==", idCategoria));
    getDocs(q).then((dataDb) => {
      const productsDb = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(productsDb);
    });
  };

  useEffect(() => {
    if (idCategoria) {
      getProductsByCategoria();
    } else {
      getProduct();
    }
  }, [idCategoria]);

  return (
    <>
      <h1>{greeting}</h1>

      <div className="itemlistcontainer">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
