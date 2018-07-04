import React from "react";
import { Animated } from "react-animated-css";
import RestRating from "./RestRating";

const ReviewItem = ({ author, rating, time, text, index }) => {
  return (
    <Animated
      animationIn="fadeInLeft"
      animationInDelay={index * 150}
      isVisible={true}
    >
      {author ? (
        <div class="expansion-panel-body bg-dark text-white mb-2 rounded">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <h5 class="mb-1">{author}</h5>
            <small>{time}</small>
          </div>
          <RestRating rating={rating} />
          <p class="mb-1">{text}</p>
        </div>
      ) : (
        <div class="expansion-panel-body bg-dark text-white mb-2 rounded">
          <div class="expansion-panel-body rounded">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">
                There is no review for this restaurant<span>😭</span>
              </h5>
            </div>
          </div>
        </div>
      )}
    </Animated>
  );
};

export default ReviewItem;
