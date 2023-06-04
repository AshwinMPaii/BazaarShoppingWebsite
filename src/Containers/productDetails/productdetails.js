import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../../Components/starRating/start";
import "./productdetails.css";
import RatingComponent from "../../Components/reviewForm/ReviewForm";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:8080/products/${id}`),
      fetch(`http://localhost:8080/reviews/product/${id}`),
    ])
      .then(([productResponse, reviewsResponse]) =>
        Promise.all([productResponse.json(), reviewsResponse.json()])
      )
      .then(([productData, reviewsData]) => {
        setProduct({ ...productData, reviews: reviewsData });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
  };

  // const calculateOverallRating = () => {
  //   const totalReviews = reviews.length;
  //   const sumOfRatings = reviews.reduce(
  //     (total, review) => total + review.rating,
  //     0
  //   );
  //   const averageRating = sumOfRatings / totalReviews;
  //   return averageRating;
  // };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  // const overallRating = calculateOverallRating();

  return (
    <div className="product-details">
      <div className="product-content">
        <div className="product-image">
          <img src={product.imageSrc} alt={product.name} />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <h4>Brand: {product.brand}</h4>
          <div className="product-rating">
            <span>Rated: </span>
            <span className="overall-rating">
              
              <StarRating rating={product.rating} />
            </span>

            <span>({product.reviews.length})</span>
          </div>
          <p className="product-price">US${product.price}</p>
          <p>{product.stock !== 0 ? "IN STOCK" : "OUT OF STOCK"}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      <div className="product-scroll-container">
        <div className="product-scroll-content">
          <div className="product-nav">
            <button className="active">Description</button>
            <button>Reviews</button>
          </div>
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
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
              <RatingComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
