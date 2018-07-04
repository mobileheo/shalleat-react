import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import Spinner from "../common/Spinner";
import { MapConsumer } from "../context/MapContext";
import createMapOptions from "../../helper/customGoogleMap";

const restaurantMarkers = (
  filteredRests,
  popover,
  setPopover,
  center,
  setCenter,
  zoom,
  setZoom
) =>
  filteredRests().map((r, i) => {
    const { geometry, icon, name, place_id: placeId, photos } = r;
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
        photos={photos}
      />
    );
  });

class GoogleMap extends PureComponent {
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
          filteredRests,
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
                options={createMapOptions}
                onClick={props => {
                  console.log(props);
                  // {x: 404, y: 600.671875, lat: 49.21146879917674, lng: -123.03999263803712, event: Proxy}
                }}
                onChange={props => {
                  console.log(props);
                  setCenter(props.center);
                }}
              >
                <CurrentMarker
                  lat={currentLocation.lat}
                  lng={currentLocation.lng}
                  text={user.firstName}
                  setCenter={setCenter}
                  setZoom={setZoom}
                  popover={popover}
                  setPopover={setPopover}
                />
                {restaurantMarkers(
                  filteredRests,
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
