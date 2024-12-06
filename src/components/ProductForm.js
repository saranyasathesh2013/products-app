import React from "react";
import "./ProductForm.css";

const ProductForm = ({ formData, handleChange, handleSubmit, isEdit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="button-container">
          <button type="submit">{isEdit ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
