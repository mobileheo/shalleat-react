import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import Spinner from "../common/Spinner";
import { MapConsumer } from "../context/MapContext";
import { RestProvider } from "../context/RestContext";
import createMapOptions from "../../helper/customGoogleMap";

const restaurantMarkers = cProps => {
  const { filteredRests, loading } = cProps;
  console.log(loading);
  return filteredRests().map((restaurant, i) => {
    const { place_id: placeId, geometry } = restaurant;
    const { lat, lng } = geometry.location;
    return loading ? null : (
      <RestProvider key={`marker-${placeId}`} lat={lat} lng={lng}>
        <RestaurantMarker
          placeId={placeId}
          lat={lat}
          lng={lng}
          location={{ lat, lng }}
          index={i}
          restaurant={restaurant}
          {...cProps}
        />
      </RestProvider>
    );
  });
};

class GoogleMap extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <MapConsumer>
        {cProps => {
          const { loading, currentLocation, center, zoom } = cProps;
          return loading ? (
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
                defaultCenter={currentLocation}
                center={center}
                zoom={zoom}
                options={createMapOptions}
                layerTypes={["TrafficLayer", "TransitLayer"]}
              >
                <CurrentMarker
                  lat={currentLocation.lat}
                  lng={currentLocation.lng}
                  text={user.firstName}
                  {...cProps}
                />
                {restaurantMarkers({ ...cProps })}
              </GoogleMapReact>
            </div>
          );
        }}
      </MapConsumer>
    );
  }
}

export default GoogleMap;
