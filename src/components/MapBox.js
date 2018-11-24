/* global window */
import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
//import MAP_STYLE from './style.json';
import MAP_STYLE from './map-style-basic-v8.json';
import {fromJS} from 'immutable';
import PropTypes from 'prop-types';
import Dimensions from 'react-dimensions';
import ControlPanel from './ControlPanel';

//const defaultMapStyle = fromJS(MAP_STYLE);
const MAPBOX_TOKEN = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g'; // Set your mapbox token here

class MapBox extends Component {

  state = {
    mapStyle: '',
    viewport: {
      width: this.props.containerWidth,
      height: this.props.containerHeight,
      latitude: 37.7577,
      longitude: -122.4376,      
      zoom: 8
    }
  };

  _onViewportChange = viewport => this.setState({viewport});
  _onStyleChange = mapStyle => this.setState({mapStyle});

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  componentDidMount() {
    console.log('componentDidMount')
    // console.log(this.props.containerWidth)
    // this.setState({viewport:{
    //   width: this.props.containerWidth,
    //   height: this.props.containerHeight,
    // }});
  }

  render() {
    const {viewport, mapStyle} = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapStyle={mapStyle}
        onViewportChange={(viewport) => this.setState({viewport})}
        //mapStyle={defaultMapStyle}
        mapboxApiAccessToken={MAPBOX_TOKEN} >
        <ControlPanel containerComponent={this.props.containerComponent} onChange={this._onStyleChange} />
      </ReactMapGL>
    );
  }
}

export default Dimensions({elementResize: true})(MapBox)