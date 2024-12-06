import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductRow from "../components/ProductRow";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .then(() => {
        if (location.state) {
          const { newProduct, updatedProduct } = location.state;

          setProducts((prev) => {
            if (newProduct) {
              return [...prev, newProduct];
            }
            if (updatedProduct) {
              return prev.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
              );
            }
            return prev;
          });
        }
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`).then(() => {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <a href="/products/new" className="link-container">
        Add Product
      </a>
    </div>
  );
};

export default ProductList;
