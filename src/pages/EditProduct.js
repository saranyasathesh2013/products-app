import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiPath = "https://fakestoreapi.com/products";

  const [formData, setFormData] = useState({
    id: undefined,
    title: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    axios.get(`${apiPath}/${id}`).then((response) => {
      const { id, title, price, description, category } = response.data;
      setFormData({ id, title, price, description });
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${apiPath}/${id}`, { ...formData, id }).then((response) => {
      navigate("/products", { state: { updatedProduct: response.data } });
    });
  };

  return (
    <div>
      <h1>{`Edit ${formData.title}`}</h1>
      <div className="product-form">
        <ProductForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEdit={true}
        />
        <div className="link-container right-aligned">
          <a href={`/products/show/${formData.id}`}>Show</a>
          <div className="divider">|</div>
          <a href={"/products"}>Home</a>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
