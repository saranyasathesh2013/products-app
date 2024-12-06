import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import "./AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const apiPath = "https://fakestoreapi.com/products";

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiPath, formData).then((response) => {
      navigate("/products", { state: { newProduct: response.data } });
    });
  };

  const navigateBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <h1 className="title">New Product</h1>
      <div className="product-form">
        <ProductForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEdit={false}
        />
        <div className="link-container right-aligned">
          <a href="#" onClick={(e) => navigateBack(e)}>
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
