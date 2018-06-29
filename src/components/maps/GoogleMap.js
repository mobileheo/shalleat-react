import React, { Component, PureComponent } from "react";
import { Redirect } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import Spinner from "../common/Spinner";
import { MapConsumer } from "../context/MapContext";

const restaurantMarkers = (
  restaurants,
  popover,
  setPopover,
  view,
  setView,
  btnRotate,
  setBtnRotateDeg
) =>
  restaurants.map((r, i) => {
    const { geometry, icon, name, place_id: placeId } = r;
    const { lat, lng } = geometry.location;
    return (
      <RestaurantMarker
        key={placeId}
        id={i}
        placeId={placeId}
        popover={popover}
        setPopover={setPopover}
        view={view}
        setView={setView}
        filters={["name", "opening_hours"]}
        lat={lat}
        lng={lng}
        icon={icon}
        name={name}
        btnRotate={btnRotate}
        setBtnRotateDeg={setBtnRotateDeg}
      />
    );
  });
const AddCurrentPositionButton = () => {
  let fullScreenBtn = document.querySelector(".gm-fullscreen-control");
  if (fullScreenBtn) {
    let target = fullScreenBtn.parentNode;
    target.setAttribute("id", "current-position-button");
    target.innerHTML = `<i class="material-icons">my_location</i>`;
  }
};
class GoogleMap extends Component {
  componentDidMount() {
    AddCurrentPositionButton();
  }
  render() {
    console.log("GoogleMap");
    const { user } = this.props;
    return (
      <MapConsumer>
        {({
          loading,
          mapLoading,
          defaultCenter,
          defaultZoom,
          restaurants,
          popover,
          setPopover,
          view,
          setView,
          btnRotate,
          setBtnRotateDeg
        }) => {
          const { center, zoom } = view;
          console.log(center);
          return !user ? (
            <Redirect to="/signin" />
          ) : loading ? (
            <div
              className="MapPage d-flex flex-column justify-content-center align-items-center w-100 mt-4"
              style={{
                height: "100vh",
                width: "100%",
                border: "1px soild black"
              }}
            >
              <Spinner />
            </div>
          ) : (
            <div
              className="MapPage"
              style={{ height: "92vh", width: "100%", borderRadius: "25px" }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapAPI }}
                center={center}
                zoom={zoom}
              >
                <CurrentMarker
                  lat={defaultCenter.lat}
                  lng={defaultCenter.lng}
                  text={user.firstName}
                />
                {restaurantMarkers(
                  restaurants,
                  popover,
                  setPopover,
                  view,
                  setView,
                  btnRotate,
                  setBtnRotateDeg
                )}
              </GoogleMapReact>
            </div>
          );
        }}
      </MapConsumer>
    );
  }
}

export default GoogleMap;
