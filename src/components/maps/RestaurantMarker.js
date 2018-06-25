import React from "react";
import { withState, lifecycle } from "recompose";
import CircularProgress from "../common/CircularProgress";
import RestaurantInfoBox from "./RestaurantInfoBox";
import Restaurant from "../../requests/restaurant"; //class for fetch restaurant

const enhance = withState("loading", "schedule", {});
const RestaurantMarker = enhance(
  ({ placeId, icon, name, loading = true, schedule }) => {
    // if (loading) return <CircularProgress />;
    return (
      <div className="RestaurantMarker">
        <div
          className="d-flex justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            transform: "translate(-25px, -25px)"
          }}
        >
          <div className="d-flex flex-column align-items-center" style={{}}>
            <img
              src={icon}
              style={{
                height: 40,
                width: 40
              }}
              alt={"marker-icon"}
            />
            <RestaurantInfoBox
              placeId={placeId}
              name={name}
              schedule={schedule}
            />
            {/* <span className="badge badge-info">{name}</span> */}
          </div>
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
