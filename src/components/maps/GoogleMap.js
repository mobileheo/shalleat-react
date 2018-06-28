import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import Spinner from "../common/Spinner";
import { MapConsumer } from "../context/MapContext";

const restaurantMarkers = (restaurants, popover, setPopover) =>
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
        filters={["name", "opening_hours"]}
        lat={lat}
        lng={lng}
        icon={icon}
        name={name}
      />
    );
  });

class GoogleMap extends PureComponent {
  render() {
    console.log("GoogleMap");
    const { user } = this.props;
    return (
      <MapConsumer>
        {({ loading, center, zoom, restaurants, popover, setPopover }) =>
          !user ? (
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
                defaultZoom={zoom}
              >
                <CurrentMarker
                  lat={center.lat}
                  lng={center.lng}
                  text={user.firstName}
                />
                {restaurantMarkers(restaurants, popover, setPopover)}
              </GoogleMapReact>
            </div>
          )
        }
      </MapConsumer>
    );
  }
}

export default GoogleMap;
