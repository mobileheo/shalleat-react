import React, { Component } from "react";
import ReviewItem from "./ReviewItem";

class Review extends Component {
  state = {
    reviews: []
  };
  componentDidMount() {
    const { reviews: ctxReviews, placeId } = this.props;
    if (ctxReviews) {
      const { reviews } = ctxReviews[placeId];
      this.setState({ reviews });
    }
  }
  render() {
    const { chosenId, placeId, isOpen } = this.props;
    const { reviews } = this.state;
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
