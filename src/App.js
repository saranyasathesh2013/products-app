import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ViewProduct from "./pages/ViewProduct";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/show/:id" element={<ViewProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/products/new" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
