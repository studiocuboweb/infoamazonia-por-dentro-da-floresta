import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiY2x1Y2FzYWxjYW50YXJhIiwiYSI6ImNqZ2hvYWJqbTBja20zM3BqdzhseWVnZXIifQ.OOwYFCzPDxOzK-a4ibeDcQ"
});

class MapBox extends Component {

  // in render()
  render() {
    return(
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "40vw"
        }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
          </Layer>
      </Map>
    )
  }
}

export default MapBox

