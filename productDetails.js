import React from "react";
import { useParams } from "react-router-dom"; // Hook to get URL parameters

const ProductDetails = () => {
  const { id } = useParams(); // Extract 'id' from the URL parameters

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Here you can display details for the product with ID {id}.</p>
    </div>
  );
};

export default ProductDetails;
