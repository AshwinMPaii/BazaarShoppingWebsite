import React from 'react';
import { Link } from "react-router-dom";
import './product.css';
import imaaa from "../../Assets/Images/shoe2.png"
import logo from "../../Assets/Icons/logo.png"


const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 9.99,
      imageSrc: imaaa,
      description: "Product 1 description",
      reviews: ["Review 1", "Review 2", "Review 3"],
    },
    {
      id: 2,
      name: "Product 2",
      price: 14.99,
      imageSrc: logo,
      description: "Product 2 description",
      reviews: ["Review 1", "Review 2"],
    },
    {
      id: 3,
      name: "Product 2",
      price: 14.99,
      imageSrc: imaaa,
      description: "Product 2 description",
      reviews: ["Review 1", "Review 2"],
    },
    {
      id: 4,
      name: "Product 2",
      price: 14.99,
      imageSrc: imaaa,
      description: "Product 2 description",
      reviews: ["Review 1", "Review 2"],
    },


  ];



  return (
    <div className="product-list">
      {products.map((product) => (
        <Link
          to={`/productdetails/${product.id}`}
          className="product-card"
          key={product.id}
        >
          <img src={product.imageSrc} alt={product.name} />
          <div className="product-card-details">
            <h2>{product.name}</h2>

            <p>Price: ${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};



export default ProductList;