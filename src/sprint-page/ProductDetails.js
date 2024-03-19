import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <>
          <h1>Post Details for ID: {id}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </>
      ) : (
        <p>No product found for ID: {id}</p>
      )}
    </div>
  );
}

export default ProductDetails;
