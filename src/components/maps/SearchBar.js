import React from "react";
import { compose, withState, lifecycle } from "recompose";

const WAIT_INTERVAL = 1500;

const enhance = compose(
  withState("input", "setInput", ""),
  withState("timerId", "setTimerId", null),
  lifecycle({
    componentWillUnmount() {
      const { timerId } = this.props;
      clearTimeout(timerId);
    }
  })
);

const SearchBar = enhance(({ style, input, setInput, timerId, setTimerId }) => {
  const handleInput = e => {
    e.preventDefault();
    const { value: input } = e.currentTarget;

    console.log("onchage=>", input);
    clearTimeout(timerId);

    const timerId = setTimeout(() => {
      setInput(input);
    }, WAIT_INTERVAL);

    setTimerId(timerId);
  };
  const submitInput = e => {
    // console.log("submit=>", input);
    e.target.keyCode === 13 && console.log(input);
  };
  return (
    // <div>
    //   <i class="material-icons">search</i>
    //   <input
    //     {...this.props}
    //     type="text"
    //     style={style}
    //     onChange={handleInput}
    //     onKeyPress={submitInput}
    //   />
    // </div>

    <div className="input-group">
      <div className="floating-label pr-2">
        <label htmlFor="exampleIconInput8">Search</label>
        <input
          aria-describedby="exampleIconInput8Help"
          className="form-control"
          id="exampleIconInput8"
          placeholder="No raspberry pi please 🙏"
        />
      </div>
      <span className="input-group-icon mr-0" id="exampleIconInput8Help">
        <i className="material-icons">search</i>
      </span>
    </div>
  );
});

export default SearchBar;
