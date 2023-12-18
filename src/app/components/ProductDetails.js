// components/ProductDetails.js
import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query; // Access the productId from the URL

  // Fetch product details based on productId

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      {/* Display more product details here */}
    </div>
  );
};

export default ProductDetails;
