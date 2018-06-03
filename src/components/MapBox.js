import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiY2x1Y2FzYWxjYW50YXJhIiwiYSI6ImNqZ2hvYWJqbTBja20zM3BqdzhseWVnZXIifQ.OOwYFCzPDxOzK-a4ibeDcQ"
});

class MapBox extends Component {
  state = {
    center: null,
  }
  
  componentWillReceiveProps(nextProps) {
    const { coordinates } = nextProps;
    const { coordinates: oldCoordinates } = this.props

    if (coordinates !== oldCoordinates) {
      this.setState({
        center: coordinates
      })
    }
  }

  
  render() {
    const { coordinates } = this.props;
    const { center } = this.state 
    
    return (
      <Map
        center={center  || coordinates}
        flyToOptions={{
          center: center || coordinates,
          speed: 0.9,
          curve: 1,
          easing(t) {
            return t;
          }
        }}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "40vw"
        }}>
      </Map>
    )
  }
}

export default MapBox

