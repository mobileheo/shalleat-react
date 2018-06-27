import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import Spinner from "../common/Spinner";
import { MapProvider, MapConsumer } from "../context/MapContext";

const restaurantMarkers = (restaurants, chosenId, setChosenId) =>
  restaurants.map((r, i) => {
    const { geometry, icon, name, place_id: placeId } = r;
    const { lat, lng } = geometry.location;
    return (
      <RestaurantMarker
        key={placeId}
        id={i}
        placeId={placeId}
        chosenId={chosenId}
        setChosenId={setChosenId}
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
        {({ loading, center, zoom, restaurants, chosenId, setChosenId }) =>
          !user ? (
            <Redirect to="/signin" />
          ) : loading ? (
            <Spinner />
          ) : (
            <div className="MapPage" style={{ height: "95vh", width: "100%" }}>
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
                {restaurantMarkers(restaurants, chosenId, setChosenId)}
              </GoogleMapReact>
            </div>
          )
        }
      </MapConsumer>
    );
  }
}

export default GoogleMap;
