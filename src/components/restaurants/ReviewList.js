import React, { Component } from "react";
import ReviewItem from "./ReviewItem";

class Review extends Component {
  render() {
    const { chosenId, placeId, isOpen, reviews: ctxReviews } = this.props;
    const reviews = ctxReviews[placeId];

    return chosenId === placeId && isOpen ? (
      <div className={chosenId === placeId && isOpen ? "" : "collapse"}>
        {reviews ? (
          reviews.map((r, i) => {
            const {
              author_name: author,
              rating,
              relative_time_description: time,
              text
            } = r;
            return (
              <ReviewItem
                key={author + time + i}
                index={i}
                author={author}
                rating={rating}
                time={time}
                text={text}
              />
            );
          })
        ) : (
          <ReviewItem />
        )}
      </div>
    ) : null;
  }
}

export default Review;
