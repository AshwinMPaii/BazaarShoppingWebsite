import React, { useState } from "react";
import "./browseProduct.css";

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

