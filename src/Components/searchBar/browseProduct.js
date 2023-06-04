import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./browseProduct.css";
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

const BrowseProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const products = [];

  fetch('http://localhost:8080/products')
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        products.push({
          id: product.productId,
          name: product.name,
          description: product.description,
          price: product.price,
          imageSrc: product.imageUrl
        });
      });
      console.log(products);
    })
    .catch(error => {
      console.error('Error:', error);
    });


  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filteredSuggestions = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    if (value === "") {
      setSuggestions([]);
    }
  };

  /*const handleSelect = (selectedProduct) => {
    console.log("Selected Product:", selectedProduct);
    // Implement your logic to handle the selection of a product
  };
  */

  const handleSelect = (selectedProduct) => {
    console.log("Selected Product:", selectedProduct);

    fetch(`http://localhost:8080/products/${selectedProduct.id}`)
      .then(response => response.json())
      .then(data => {
        console.log("Product Details:", data);

        // Implement your logic to display the product details to the user
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Search Term:", searchTerm);
      // Implement your logic to handle the Enter key press
    }
  };
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
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
      />
      {suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((product) => (
            <Link
              to={`/productdetails/${product.id}`}
              key={product.id}
            >
              <div
                key={product.id}
                className="suggestion-item"
                onClick={() => handleSelect(product)}
              >
                <img src={getImageSource(product.imageSrc)} alt={product.name} />
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseProduct;

