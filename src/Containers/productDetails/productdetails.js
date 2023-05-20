import React, { useState } from "react";
import { useParams } from "react-router-dom";
import imaaa from "../../Assets/Images/shoe2.png";
import StarRating from '../../Components/starRating/start'
import "./productdetails.css";
import RatingComponent from "../../Components/reviewForm/ReviewForm";

const ProductDetails = () => {
  const { id } = useParams();

  const [showDescription, setShowDescription] = useState(true);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 9.99,
      brand: "xiamo",
      imageSrc: imaaa,
      description: "Product 1 description",
      reviews: [
        { id: 1, email: "abc@gmail.com", rating: 4, comment: "Review 1" },
        { id: 2, email: "abc@gmail.com", rating: 5, comment: "Review 2" },
        { id: 3, email: "abc@gmail.com", rating: 3, comment: "Review 3" },
      ],
      stock: 10,
    },
    // Add more products as needed
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const toggleDescription = () => {
    setShowDescription(true);
  };

  const toggleReviews = () => {
    setShowDescription(false);
  };

  const handleReviewSubmit = (rating, comment) => {
    // Handle review submission
    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };

  const calculateOverallRating = () => {
    const totalReviews = product.reviews.length;
    const sumOfRatings = product.reviews.reduce(
      (total, review) => total + review.rating,
      0
    );
    const averageRating = sumOfRatings / totalReviews;
    return averageRating;
  };

  const overallRating = calculateOverallRating();

  return (
    <div className="product-details">
      <div className="product-content">
        <div className="product-image">
          <img src={product.imageSrc} alt={product.name} />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <h4>Brand:{product.brand}</h4>
          <div className="product-rating">
            <span>Rated: </span>
            <span className="overall-rating">{overallRating.toFixed(1)}</span>
            <StarRating rating={overallRating} />
            <span>({product.reviews.length})</span>
          </div>
          <div>OPTIONS</div>
          <div className="product-actions">
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
          </div>
          <div>TYPES</div>
          <div className="product-actions">
            <button>Type 1</button>
            <button>Type 2</button>
            <button>Type 3</button>
          </div>
          <p className="product-price">US${product.price}</p>
          <p>{product.stock !== 0 ? "IN STOCK" : "OUT OF STOCK"}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="product-scroll-container">
        <div className="product-scroll-content">
          <div className="product-nav">
            <button
              className={showDescription ? "active" : ""}
              onClick={toggleDescription}
            >
              Description
            </button>
            <button
              className={!showDescription ? "active" : ""}
              onClick={toggleReviews}
            >
              Reviews
            </button>
          </div>
          {showDescription ? (
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          ) : (
            <div className="product-reviews">
              <h3>Reviews</h3>
              {product.reviews.map((review) => (
                <div className="review" key={review.id}>
                  <div className="review-header">
                    <div className="profile-icon"></div>
                    <div className="review-info">
                      <p className="review-email">{review.email}</p>
                      <div className="review-rating">
                        <StarRating rating={review.rating} />
                      </div>
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
              <div className="add-review">
                {/* <h3>Add a Review</h3>
                <StarRating onSubmit={handleReviewSubmit} /> */}
                <RatingComponent />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
