import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
      <Container className="justify-content-md-center">
        <Row>
          <Col>
            {loading ? (
              <p>Loading...</p>
            ) : product ? (
              <>
                <h1>Post Details for ID: {id}</h1>
                <Image src={product.image} thumbnail />
                <p>{product.description}</p>
                <p>{product.price}</p>
              </>
            ) : (
              <p>No product found for ID: {id}</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetails;
