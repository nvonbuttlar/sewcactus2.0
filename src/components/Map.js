import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import "../styles/Map.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// Coordinates @ Cactus Sewing Stuido: lat={43.667780} lng={-79.450040}

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.66778,
      lng: -79.45004
    },
    zoom: 15
  };

  render() {
    const { center, zoom } = this.props;
    const API_KEY = process.env.REACT_APP_API_KEY;
  
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <FontAwesomeIcon
            className="map-icon"
            icon={faMapMarkerAlt}
            lat={43.66778}
            lng={-79.45004}
            size="2x"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
