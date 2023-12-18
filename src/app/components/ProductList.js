// components/ProductList.js
import React from "react";
import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <a>
              <p>{product.name}</p>
              <p>${product.price}</p>
            </a>
          </Link>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
