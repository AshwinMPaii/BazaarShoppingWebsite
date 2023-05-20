import React, { useState } from "react";
import "./browseProduct.css";
import shoeImg1 from "../../Assets/Images/shoepic.PNG";
import shoeImg2 from "../../Assets/Images/shoe2.png";

const BrowseProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 9.99,
      imageSrc: shoeImg1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 14.99,
      imageSrc: shoeImg2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 9.99,
      imageSrc: "path/to/image1.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: 14.99,
      imageSrc: "path/to/image2.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: 9.99,
      imageSrc: "path/to/image1.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: 14.99,
      imageSrc: "path/to/image2.jpg",
    },
    {
      id: 7,
      name: "Product 7",
      price: 9.99,
      imageSrc: "path/to/image1.jpg",
    },
    {
      id: 8,
      name: "Product 8",
      price: 14.99,
      imageSrc: "path/to/image2.jpg",
    },
    {
      id: 9,
      name: "Product 9",
      price: 9.99,
      imageSrc: "path/to/image1.jpg",
    },
    {
      id: 10,
      name: "Product 10",
      price: 14.99,
      imageSrc: "path/to/image2.jpg",
    },
    // Add more products as needed
  ];

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filteredSuggestions = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSelect = (selectedProduct) => {
    console.log("Selected Product:", selectedProduct);
    // Implement your logic to handle the selection of a product
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Search Term:", searchTerm);
      // Implement your logic to handle the Enter key press
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
            <div
              key={product.id}
              className="suggestion-item"
              onClick={() => handleSelect(product)}
            >
              <img src={product.imageSrc} alt={product.name} />
              <span>{product.name}</span>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseProduct;
