import React, { Component } from "react";
import { Animated } from "react-animated-css";
import ReviewItem from "./ReviewItem";
import Restaurant from "../../requests/restaurant";

const filters = ["reviews"];

class Review extends Component {
  state = {
    reviews: []
  };
  async componentDidMount() {
    const { reviews } = await Restaurant.getDetail(this.props.placeId, filters);
    this.setState({ reviews });
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
