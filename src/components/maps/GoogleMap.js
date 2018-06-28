import React, { Component, PureComponent } from "react";
import { Redirect } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import Spinner from "../common/Spinner";
import { MapConsumer } from "../context/MapContext";

const restaurantMarkers = (restaurants, popover, setPopover, view, setView) =>
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
      />
    );
  });

class GoogleMap extends Component {
  render() {
    console.log("GoogleMap");
    const { user } = this.props;
    return (
      <MapConsumer>
        {({
          loading,
          defaultCenter,
          defaultZoom,
          restaurants,
          popover,
          setPopover,
          view,
          setView
        }) => {
          const { center, zoom } = view;
          console.log(center);
          return !user ? (
            <Redirect to="/signin" />
          ) : loading ? (
            <Spinner />
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
                  setView
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
