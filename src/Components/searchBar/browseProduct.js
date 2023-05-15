import React, { useState } from 'react';
import axios from 'axios';
import './browseProduct.css';

const BrowseProduct = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = async (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        try {
            const response = await axios.get(`/api/suggestions?searchTerm=${value}`);
            const fetchedSuggestions = response.data;
            setSuggestions(fetchedSuggestions);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleSelect = (selectedProduct) => {
        // Implement your logic to handle the selection of a product
        // You can perform any necessary actions here, such as redirecting to the product page
        console.log('Selected Product:', selectedProduct);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Implement your logic to handle the Enter key press
            // You can perform any necessary actions here, such as redirecting to the selected product page
            console.log('Search Term:', searchTerm);
        }
    };

    return (
        <div className="search-bar-container">
            <input
                className='search-bar'
                type="text"
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Search..."
            />
            <ul>
                {suggestions.map((product) => (
                    <li key={product.id} onClick={() => handleSelect(product)}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseProduct;
