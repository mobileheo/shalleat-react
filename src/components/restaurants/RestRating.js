import React from "react";
import StarRatings from "react-star-ratings";

const RestRating = ({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#ff9800"
      starDimension="1.7vh"
      starSpacing="2px"
    />
  );
};

export default RestRating;
