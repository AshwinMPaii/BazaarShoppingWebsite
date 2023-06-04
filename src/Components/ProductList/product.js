import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./product.css";
// import logo from "../../Assets/Icons/logo.png";

const ProductList = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products/category/${categoryId}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Link
          to={`/productdetails/${product.productId}`}
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




