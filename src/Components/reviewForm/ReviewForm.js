import React, { useState } from "react";
import "./ReviewForm.css"
import { Rating, __esModulefrom } from "react-simple-star-rating";

const ReviewForm = () => {
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



    console.log("Rating:", rating);
    console.log("Comment:", comment);

    // Reset form fields
    setRating(0);
    setComment("");
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
          className="foo" // Will remove the inline style if applied
        />
      </div>
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button className="review-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewForm;
