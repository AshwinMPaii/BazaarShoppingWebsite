import React, { useState } from "react";
import "./ReviewForm.css";
import axios from "axios";
import { Rating } from "react-simple-star-rating";

const ReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = 1; // Replace with the actual user ID
    // const productId = 6; // Replace with the actual product ID

    const reviewData = {
      rating: rating,
      comment: comment,
    };

    axios
      .post(`http://localhost:8080/reviews/${userId}/${productId}`, reviewData)
      .then((response) => {
        console.log("Review added successfully:", response.data);
        setRating(0);
        setComment("");
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };

  return (
    <div>
      <h3>Add a Review</h3>
      <div className="star-rating">
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={20}
          label
          transition
          fillColor="orange"
          emptyColor="gray"
          className="foo"
        />
      </div>
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button className="review-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;