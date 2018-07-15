import React from "react";
import { Animated } from "react-animated-css";
import RestRating from "./RestRating";

const ReviewItem = ({ author, rating, time, text, index }) => {
  console.log(author);
  return (
    <Animated
      animationIn="fadeInLeft"
      animationInDelay={index * 150}
      isVisible={true}
    >
      {author ? (
        <div className="expansion-panel-body bg-dark text-white mb-2 rounded">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <h5 className="mb-1">{author}</h5>
            <small>{time}</small>
          </div>
          <RestRating rating={rating} />
          <p className="mb-1">{text}</p>
        </div>
      ) : (
        <div className="expansion-panel-body bg-dark text-white mb-2 rounded">
          <div className="expansion-panel-body rounded">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                There is no review for this restaurant<span
                  role="img"
                  aria-label="sad-face"
                >
                  😭
                </span>
              </h5>
            </div>
          </div>
        </div>
      )}
    </Animated>
  );
};

export default ReviewItem;
