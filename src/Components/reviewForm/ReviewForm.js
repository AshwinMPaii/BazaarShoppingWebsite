import React, { useState } from "react";
import "./ReviewForm.css";
import axios from "axios";
import { Rating } from "react-simple-star-rating";

const getUserData = () => {
  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    return JSON.parse(userDataString);
  }
  return null;
};
const getToken = () => {
  const userData = getUserData();
  if (userData) {
    return userData.token;
  }
  return null;
};
const getId = () => {
  const userData = getUserData();
  if (userData) {
    return userData.id;
  }
  return null;
};
const token = getToken();
console.log("cart" + token);
const id = getId();

const ReviewForm = ({productId}) => {
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

    const userId = getId(); // Replace with the actual user ID
    // const productId = 6; // Replace with the actual product ID

    const reviewData = {
      rating: rating,
      comment: comment,
    };

    const token = getToken(); // Get the latest token

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    fetch(`http://localhost:8080/reviews/${userId}/${productId}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(reviewData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Review added successfully");
          setRating(0);
          setComment("");
        } else {
          throw new Error("Failed to add review");
        }
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
