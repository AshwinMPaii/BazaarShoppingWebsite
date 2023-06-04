import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
//import imaaa from "../../Assets/Images/shoe2.png";
import StarRating from '../../Components/starRating/start'
import "./productdetails.css";
import RatingComponent from "../../Components/reviewForm/ReviewForm";
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

const ProductDetails = () => {
  let history = useNavigate();
  const { id } = useParams();

  const [showDescription, setShowDescription] = useState(true);


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

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
  };




  // const product = products.find((product) => product.id === parseInt(id));

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


  const addProductToCart = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:8080/carts/1/${productId}/1`);
      console.log('Response:', response.data);
      history('/time1');

    } catch (error) {
      console.error('Error:', error);
      // Handle the error or display an error message
    }
  };

  return (
    <div className="product-details">
      <div className="product-content">
        <div className="product-image">
          <img src={getImageSource(product.imageUrl)} alt={product.name} />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <h4>Brand:{product.brand}</h4>
          {/* <div className="product-rating">
            <span>Rated: </span>
            <span className="overall-rating">{overallRating.toFixed(1)}</span>
            <StarRating rating={overallRating} />
            <span>({product.reviews.length})</span>
          </div> */}
          <div className="product-rating">
            <span>Rated: </span>
            <span className="overall-rating">

              <StarRating rating={product.rating} />
            </span>

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
          <button className="add-to-cart" onClick={() =>
            addProductToCart(product.productId)}>Add to Cart</button>
        </div>
      </div>

      <div className="product-scroll-container">
        {/* <div className="product-scroll-content"> */}
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
                  <div className="profile-review-container">
                    <div className="profile-icon"></div>
                    <div className="review-info">
                      <p className="review-email">{review.userName}</p>
                      <p className="review-date" style={{ marginLeft: '10px' }}>{review.reviewDate}</p>
                    </div>
                  </div>
                  <div className="review-rating">
                    <StarRating rating={review.rating} />
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
