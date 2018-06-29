import React from "react";

class RestRating extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: 0 };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(event) {
  //   this.setState({ value: undefined });
  // }

  render() {
    return (
      <div>
        <Rating {...this.props} initialRating={this.state.value} />
        <button onClick={this.handleClick}>Reset</button>
      </div>
    );
  }
}
export default RestRating;
{
  /* <RestRating placeholderRating={3} />; */
}
