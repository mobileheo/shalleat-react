import React from "react";
import { compose, withState, lifecycle } from "recompose";
import CircularProgress from "../common/CircularProgress";
import RestaurantInfoBox from "./RestaurantInfoBox";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Restaurant from "../../requests/restaurant"; //class for fetch restaurant

// const spinnerWhileLoading = isLoading =>
//   branch(
//     isLoading,
//     renderComponent(CircularProgress) // `Spinner` is a React component
//   );
const getSchedule = async (placeId, filters) => {
  try {
    const schedule = await Restaurant.getSchedule(placeId, filters);
    return schedule;
  } catch (error) {
    console.log(error);
  }
};
const enhance = compose(
  withState("schedule", "setSchedule", {}),
  withState("loading", "setLoading", true),
  withState("popoverOpen", "setPopover", false),
  lifecycle({
    async componentDidMount(props) {
      console.log(props);

      const schedule = await getSchedule(
        this.props.placeId,
        this.props.filters
      );
      this.props.setSchedule(schedule);
      this.props.setLoading(!this.props.loading);
    }
  })
);

const RestaurantMarker = enhance(
  ({ placeId, icon, name, loading, schedule, popoverOpen, setPopover }) => {
    return loading ? (
      <CircularProgress />
    ) : (
      <div className="RestaurantMarker">
        <div
          className="d-flex justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            transform: "translate(-25px, -25px)"
          }}
        >
          <button
            id={`Popover-${placeId}`}
            className={"btn d-flex justify-content-center align-items-center"}
            style={{
              "min-width": "50px",
              "border-radius": "1rem"
            }}
            onClick={() => setPopover(!popoverOpen)}
            alt={"marker-icon"}
          >
            <img
              src={icon}
              style={{
                position: "absolute",
                height: 40,
                width: 40
              }}
              alt={"marker-icon"}
            />
          </button>
          <RestaurantInfoBox
            placeId={placeId}
            name={name}
            schedule={schedule}
            popoverOpen={popoverOpen}
            setPopover={setPopover}
          />
        </div>
      </div>
    );
  }
);

// const PostsListWithData = lifecycle({
//   async componentDidMount() {
//     const { placeId, filters } = this.props;
//     try {
//       const schedule = await Restaurant.getSchedule(placeId, filters);
//       console.log(schedule);
//       const loading = !this.state.loading;
//       this.setState({ schedule, loading });
//     } catch (error) {
//       console.log(error);
//     }
//   }
// })(RestaurantMarker);

// const componentDidMount = async ({ placeId, filters }) => {
//   // const obj = { placeId, filters };
//   const schedule = await Restaurant.getSchedule(placeId, filters);
//   // console.log(placeId);
//   console.log(schedule);
// };
// const methods = {
//   componentDidMount
// };

// const RestaurantMarker = ({ placeId, icon, name }) => {
//   return (
//     <div className="RestaurantMarker">
//       <div
//         className="d-flex justify-content-center"
//         style={{
//           width: "50px",
//           height: "50px",
//           transform: "translate(-25px, -25px)"
//         }}
//       >
//         <div className="d-flex flex-column align-items-center" style={{}}>
//           <img
//             src={icon}
//             style={{
//               height: 40,
//               width: 40
//             }}
//             alt={"marker-icon"}
//           />
//           <RestaurantInfoBox placeId={placeId} name={name} />
//           {/* <span className="badge badge-info">{name}</span> */}
//         </div>
//       </div>
//     </div>
//   );
// };

export default RestaurantMarker;
