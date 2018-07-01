import React, { PureComponent } from "react";
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
  center,
  setCenter,
  zoom,
  setZoom
) =>
  restaurants.map((r, i) => {
    const { geometry, icon, name, place_id: placeId } = r;
    const { lat, lng } = geometry.location;
    return (
      <RestaurantMarker
        key={placeId}
        index={i}
        placeId={placeId}
        center={center}
        setCenter={setCenter}
        zoom={zoom}
        setZoom={setZoom}
        popover={popover}
        setPopover={setPopover}
        filters={["name", "opening_hours"]}
        lat={lat}
        lng={lng}
        icon={icon}
        name={name}
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
class GoogleMap extends PureComponent {
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
          currentLocation,
          center,
          setCenter,
          zoom,
          setZoom,
          restaurants,
          popover,
          setPopover,
          btnRotate,
          setBtnRotateDeg
        }) => {
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
              className="GoogleMap mb-8"
              style={{ height: "100%", width: "100%" }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapAPI }}
                center={center}
                zoom={zoom}
              >
                <CurrentMarker
                  lat={currentLocation.lat}
                  lng={currentLocation.lng}
                  text={user.firstName}
                />
                {restaurantMarkers(
                  restaurants,
                  popover,
                  setPopover,
                  center,
                  setCenter,
                  zoom,
                  setZoom,
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
