import React from "react";
import { compose, withState, lifecycle } from "recompose";
import { MapConsumer } from "../context/MapContext";

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
  return (
    <MapConsumer>
      {({ loading, setKeyword }) => {
        return loading ? null : (
          <div className="input-group">
            <div className="floating-label pr-2">
              <label htmlFor="exampleIconInput8">Search</label>
              <input
                aria-describedby="SearchBar"
                className="form-control"
                id="exampleIconInput8"
                placeholder="No raspberry pi please 🙏"
                onChange={e => {
                  const { value: keyword } = e.currentTarget;
                  setKeyword(keyword);
                }}
              />
            </div>
            <span className="input-group-icon mr-0" id="SearchBar">
              <i className="material-icons">search</i>
            </span>
          </div>
        );
      }}
    </MapConsumer>
  );
});

export default SearchBar;
