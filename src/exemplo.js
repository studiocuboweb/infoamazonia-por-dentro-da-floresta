import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';
import Dimensions from 'react-dimensions';
import Immutable from 'immutable'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g';

class MapBox extends Component {
  state = {
    stateViewport: {
      width:0,
      height:0,
      latitude:0,
      longitude:0,
      zoom: 8
    },
    updated:true
  }

  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  }
  componentDidMount() {
    this.setState({stateViewport:{
      width: this.props.containerWidth,
      height: this.props.containerHeight,
      latitude: this.props.coordinates[1],
      longitude: this.props.coordinates[0],
      zoom: 7
    }});
  }
  componentWillReceiveProps(nextProps) {

    this.setState({stateViewport:{
      width: this.props.containerWidth,
      height: this.props.containerHeight,
      latitude: this.props.coordinates[1],
      longitude: this.props.coordinates[0],
      zoom: 8
    }})
  }

  render() {

    const mapStyle = Immutable.fromJS({
      "version": 8,
      "sources": {
        "raster-tiles": {
          "type": "raster",
          "url": "mapbox://styles/infoamazonia/cjmh38rfkgtzc2rp0tir972ag",
          "tileSize": 256
        }
      },
      "layers": [{
          "id": "Assentamentos_incra-2wyd2b2",
          "type": "raster",
          "source": "raster-tiles",
          "minzoom": 0,
          "maxzoom": 22
      },
      {
        "id": "raster-layer",
        "type": "raster",
        "source": {
          "type": "raster",
          "tiles": ["https://api.mapbox.com/v4/cjmgv2m1s2q942spqd4naf2ke/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g"]
        },
        "minzoom": 0,
        "maxzoom": 22
      }
    ]
    });
    return (
      <ReactMapGL
        {...this.state.stateViewport}
        //mapStyle='mapbox://styles/infoamazonia/cjmh38rfkgtzc2rp0tir972ag'
        mapStyle={mapStyle}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={this.viewportChange()}
      >
        {console.log("MAP STYLE")}
        {console.log(mapStyle)}
      </ReactMapGL>
    )
  }
}
export default Dimensions({elementResize: true})(MapBox)