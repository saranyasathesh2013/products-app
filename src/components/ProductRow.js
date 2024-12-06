import React from "react";

const ProductRow = ({ product, onDelete }) => {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>${product.price}</td>
      <td>
        <div className="link-container">
          <a href={`/products/show/${product.id}`}>Show</a>
          <div>|</div>
          <a href={`/products/edit/${product.id}`}>Edit</a>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
