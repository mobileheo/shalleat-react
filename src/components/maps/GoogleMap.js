import React, { Component } from "react";
// import { compose, withState, lifecycle } from "recompose";
import GoogleMapReact from "google-map-react";
import { googleMapAPI } from "../../requests/configuration";
import CurrentMarker from "./CurrentMarker";
import RestaurantMarker from "./RestaurantMarker";
import Spinner from "../common/Spinner";
import Restaurant from "../../requests/restaurant";

const restaurantMarkers = restaurants =>
  restaurants.map((r, i) => {
    const { geometry, icon, name, place_id: placeId } = r;
    const { lat, lng } = geometry.location;
    return (
      <RestaurantMarker
        key={placeId}
        id={i}
        placeId={placeId}
        filters={["name", "opening_hours"]}
        lat={lat}
        lng={lng}
        icon={icon}
        name={name}
      />
    );
  });

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentLocation: null,
      center: null,
      zoom: 15,
      restaurants: [],
      radius: 580
    };
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  geoError() {
    alert("Geocoder failed.");
  }

  geoSuccess = position => {
    const { latitude: lat, longitude: lng } = position.coords;
    const currentLocation = { lat, lng };
    const center = currentLocation;

    this.setState(
      {
        currentLocation,
        center
      },
      this.findNearby
    );
  };

  async findNearby() {
    const { currentLocation, radius } = this.state;
    const filters = { ...currentLocation, radius };
    const loading = false;
    try {
      const restaurants = await Restaurant.findNearby(filters);
      this.setState({
        loading,
        restaurants
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { loading, center, zoom, restaurants } = this.state;
    if (loading) {
      return <Spinner />;
    } else {
      const { results } = restaurants;
      return (
        <div className="MapPage" style={{ height: "95vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapAPI }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <CurrentMarker lat={center.lat} lng={center.lng} text={"You"} />
            {restaurantMarkers(results)}
          </GoogleMapReact>
        </div>
      );
    }
  }
}

export default GoogleMap;

// const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// };

// const geoError = () => {
//   alert("Geocoder failed.");
// };

// const geoSuccess = position => {
//   const { latitude: lat, longitude: lng } = position.coords;
//   const currentLocation = { lat, lng };
//   const center = currentLocation;
//   updateLocation(currentLocation);
//   updateCenter(center);
//   findNearby();
// };

// const findNearby = async () => {
//   // const { currentLocation, radius } = this.state;
//   const filters = { ...currentLocation, radius };
//   // const loading = false;
//   try {
//     const restaurants = await Restaurant.findNearby(filters);
//     updateLoading(!loading);
//     updateRestaurants(restaurants);
//     // this.setState({
//     //   loading,
//     //   restaurants
//     // });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const enhance = compose(
//   withState("loading", "updateLoading", true),
//   withState("currentLocation", "updateLocation", null),
//   withState("center", "updateCenter", null),
//   withState("zoom", "updateZoom", 15),
//   withState("restaurants", "updateRestaurants", []),
//   withState("radius", "updateRadius", 500),
//   lifecycle({
//     componentDidMount() {
//       this.getLocation();
//     }
//   })
// );
// const GoogleMap = enhance(
//   ({
//     loading,
//     updateLoading,
//     currentLocation,
//     updateLocation,
//     center,
//     updateCenter,
//     zoom,
//     updateZoom,
//     restaurants,
//     updateRestaurants,
//     radius,
//     updateRadius
//   }) => {
//     const { results } = restaurants;
//     return loading ? (
//       <Spinner />
//     ) : (
//       <div className="MapPage" style={{ height: "95vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: googleMapAPI }}
//           defaultCenter={center}
//           defaultZoom={zoom}
//         >
//           <CurrentMarker lat={center.lat} lng={center.lng} text={"You"} />
//           {restaurantMarkers(results)}
//         </GoogleMapReact>
//       </div>
//     );
//   }
// );
