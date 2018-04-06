import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
const imagePath = '/';
L.Icon.Default.imagePath = imagePath;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').split(imagePath)[1],
    iconUrl: require('leaflet/dist/images/marker-icon.png').split(imagePath)[1],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').split(imagePath)[1],
});

class MainMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    layers: PropTypes.array,
    baseLayer: PropTypes.object
  }
  static defaultProps = {
    center: [6.4, -66.6],
    zoom: 6,
    baseLayer: {
      url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
    },
    layers: []
  }
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.handleTouchStart = this.handleTouchStart.bind(this);
  }
  componentDidMount () {
    this.node = findDOMNode(this);
    window.addEventListener('touchstart', this.handleTouchStart);
  }
  componentWillUnmount() {
    window.removeEventListener('touchstart', this.handleTouchStart);
  }
  handleTouchStart (ev) {
    if(ev.target !== this.node && !this.node.contains(ev.target)) {
      if(this.state.active) {
        this.setState({ active: false });
        setTimeout(() => {
          this.refs.map.leafletElement.invalidateSize(true);
        }, 210);
      }
    } else if(!this.state.active) {
      ev.preventDefault();
      this.setState({ active: true });
      setTimeout(() => {
        this.refs.map.leafletElement.invalidateSize(true);
      }, 210);
    }
  }
  render () {
    const { center, zoom, baseLayer, layers } = this.props;
    return (
      <Map ref="map" center={center} zoom={zoom}>
        <TileLayer url={baseLayer.url} />
        {layers.map((layer, i) => (
          <TileLayer key={layer.url} url={layer.url} />
        ))}
      </Map>
    );
  }
}

export default MainMap;
