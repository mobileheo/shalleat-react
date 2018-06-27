import React from "react";
import { compose, withState, lifecycle } from "recompose";
import Spinner from "../common/Spinner";
import { MapProvider, MapConsumer } from "../context/MapContext";
import RestaurantInfoBox from "./RestaurantInfoBox";
import Restaurant from "../../requests/restaurant"; //class for fetch restaurant

const setSchedule = schedule => state => ({ schedule });

class RestaurantMarker extends React.PureComponent {
  state = {
    popoverOpen: false,
    loading: true,
    schedule: {}
  };

  componentDidMount() {
    this._isMounted = true;
    getSchedule(this.props.placeId, this.props.filters)
      .then(schedule => {
        this.setSchedule({ schedule, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSchedule = options => {
    if (this._isMounted) {
      this.setState(options);
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  setPopover = popoverOpen => this.setState({ popoverOpen });

  render() {
    const { popoverOpen, loading, schedule } = this.state;
    const { placeId, icon, name, chosenId, setChosenId } = this.props;
    return loading ? null : (
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
              minWidth: "50px",
              borderRadius: "1rem"
            }}
            // onClick={() => this.setPopover(!popoverOpen)}
            onClick={() => setChosenId(placeId)}
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

          {/* {placeId === chosenId ? (
            <RestaurantInfoBox
              placeId={placeId}
              chosenId={chosenId}
              name={name}
              schedule={schedule}
              popoverOpen={popoverOpen}
              setPopover={() => this.setPopover}
            />
          ) : (
            <div />
          )} */}
          {placeId === chosenId ? (
            <RestaurantInfoBox
              placeId={placeId}
              name={name}
              schedule={schedule}
              popoverOpen={placeId === chosenId}
              setPopover={() => this.setPopover}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

const getSchedule = async (placeId, filters) => {
  try {
    const schedule = await Restaurant.getSchedule(placeId, filters);

    return schedule;
  } catch (error) {
    console.log(error);
  }
};
// const enhance = compose(
//   withState("schedule", "setSchedule", {}),
//   withState("loading", "setLoading", true),
//   withState("popoverOpen", "setPopover", false),
//   lifecycle({
//     async componentDidMount() {
//       try {
//         getSchedule(this.props.placeId, this.props.filters).then(schedule => {
//           this.props.setSchedule(schedule);
//           this.props.setLoading(!this.props.loading);
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     componentWillUnmount() {
//       console.log("componentWillUnmount");
//     }
//   })
// );

// const RestaurantMarker = enhance(
//   ({ placeId, icon, name, loading, schedule, popoverOpen, setPopover }) => {
//     return loading ? null : (
//       <div className="RestaurantMarker">
//         <div
//           className="d-flex justify-content-center"
//           style={{
//             width: "50px",
//             height: "50px",
//             transform: "translate(-25px, -25px)"
//           }}
//         >
//           <button
//             id={`Popover-${placeId}`}
//             className={"btn d-flex justify-content-center align-items-center"}
//             style={{
//               minWidth: "50px",
//               borderRadius: "1rem"
//             }}
//             onClick={() => setPopover(!popoverOpen)}
//             alt={"marker-icon"}
//           >
//             <img
//               src={icon}
//               style={{
//                 position: "absolute",
//                 height: 40,
//                 width: 40
//               }}
//               alt={"marker-icon"}
//             />
//           </button>
//           {popoverOpen ? (
//             <RestaurantInfoBox
//               placeId={placeId}
//               name={name}
//               schedule={schedule}
//               popoverOpen={popoverOpen}
//               setPopover={setPopover}
//             />
//           ) : (
//             <div />
//           )}
//         </div>
//       </div>
//     );
//   }
// );

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
