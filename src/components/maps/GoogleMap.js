import React, { PureComponent } from "react";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import { MapConsumer } from "../context/MapContext";
import { RestProvider } from "../context/RestContext";
import createMapOptions from "../../helper/customGoogleMap";

const restaurantMarkers = cProps => {
  const { filteredRests, loading } = cProps;
  return filteredRests().map((restaurant, i) => {
    const { place_id: placeId, geometry } = restaurant;
    const { lat, lng } = geometry.location;
    return loading ? null : (
      <RestProvider key={`marker-${placeId}`} lat={lat} lng={lng}>
        <RestaurantMarker
          placeId={placeId}
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
        {mcProps => {
          const {
            currentLocation,
            center,
            zoom,
            setPopover,
            setCenter
          } = mcProps;
          return (
            <div
              className="GoogleMap mb-8"
              style={{ height: "100%", width: "100%" }}
            >
              <div
                className="currentLocator mt-3 mr-3 btn d-flex justify-content-center"
                style={{
                  position: "absolute",
                  minWidth: "25px",
                  top: "0px",
                  right: "0px",
                  zIndex: 15,
                  cursor: "pointer",
                  padding: "10px 5px"
                }}
                onClick={e => {
                  e.preventDefault();
                  setPopover(null, false);
                  setCenter(currentLocation);
                }}
              >
                <i className="material-icons">my_location</i>
              </div>
              <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapAPI }}
                defaultCenter={currentLocation}
                center={center}
                zoom={zoom}
                options={createMapOptions}
                layerTypes={["TrafficLayer", "TransitLayer"]}
                onChange={({ center, zoom }) => setCenter(center)}
              >
                <CurrentMarker
                  lat={currentLocation.lat}
                  lng={currentLocation.lng}
                  text={user.firstName}
                  {...mcProps}
                />
                {restaurantMarkers({ ...mcProps })}
              </GoogleMapReact>
            </div>
          );
        }}
      </MapConsumer>
    );
  }
}

export default GoogleMap;
