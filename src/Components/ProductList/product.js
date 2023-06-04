import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./product.css";
import b1 from "../../Assets/Images/1.jpg";
import b2 from "../../Assets/Images/2.jpg";
import b3 from "../../Assets/Images/3.jpg";
import e1 from "../../Assets/Images/4.jpg";
import e2 from "../../Assets/Images/5.jpg";
import e3 from "../../Assets/Images/6.jpg";
import f1 from "../../Assets/Images/7.jpg";
import f2 from "../../Assets/Images/8.jpg";
import f3 from "../../Assets/Images/9.jpg";
import g1 from "../../Assets/Images/10.jpg";
import g2 from "../../Assets/Images/11.jpg";
import g3 from "../../Assets/Images/12.jpg";




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

  const getImageSource = (imageName) => {
    switch (imageName) {
      case 'b1':
        return b1;
      case 'b2':
        return b2;
      case 'b3':
        return b3;
      case "e1":
        return e1;
      case "e2":
        return e2;
      case "e3":
        return e3;
      case "f1":
        return f1;
      case "f2":
        return f2;
      case "f3":
        return f3;
      case "g1":
        return g1;
      case "g2":
        return g2;
      case "g3":
        return g3;
      default:
        return ""; // Provide a default image source or handle the case where the image name is not found
    }
  };
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link
          to={`/productdetails/${product.productId}`}
          className="product-card"
          key={product.id}
        >
          <img src={getImageSource(product.imageUrl)} alt={product.name} />
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