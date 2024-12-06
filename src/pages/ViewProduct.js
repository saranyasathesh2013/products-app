import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ViewProduct.css";

const ViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const navigateBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <div className="data-grid">
        <p>Name:</p>
        <p>{product.title}</p>
        <p>Price:</p>
        <p>${product.price}</p>
        <p>Description:</p>
        <p>{product.description}</p>
      </div>

      <div className="link-container">
        <a href="#" onClick={(e) => navigateBack(e)}>
          Back
        </a>
        <div className="divider">|</div>
        <a href={`/products/edit/${product.id}`}>Edit</a>
      </div>
    </div>
  );
};

export default ViewProduct;
