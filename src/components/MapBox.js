import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Source } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g",
  // minZoom: 8,
  // maxZoom: 10,
  interactive: ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) ? false : true
});

class MapBox extends Component {
  state = {
    stateOldLayerId:null,
    stateSourceOptionType:null,
    stateSourceOptionUrl:null,
    center: null,
    stateZoomNumber: null,
    stateStyle:null,
    stateSourceId:null,
    stateLayerType:null,
    stateSourceLayer:null,
    stateLayoutVisibility:null,
    stateLayoutData:{},
    statePaint:{},
    updated:true
  }
  
  componentWillReceiveProps(nextProps) {
    const { sourceOptionType,sourceOptionUrl,coordinates,style,sourceId,layerType,sourceLayer,layoutVisibility,layerId,layoutData,paintData,zoomNumber } = nextProps;
    const { sourceOptionType:oldSourceOptionType,sourceOptionUrl:oldSourceOptionUrl,coordinates:oldCoordinates,style:oldStyle,sourceId:oldSourceId,layerType:oldLayerType,sourceLayer:oldSourceLayer,layoutVisibility:oldLayoutVisibility,layerId:oldLayerId,layoutData:oldlayoutData,paintData:oldPaintData,zoomNumber:oldZoom} = this.props

    if (sourceOptionType !== oldSourceOptionType) {
      this.setState({
        stateSourceOptionType: sourceOptionType
      })
    }
    
    if (layerId !== oldLayerId) {
      this.setState({
        stateOldLayerId: layerId
      })
    }


    if (sourceOptionUrl !== oldSourceOptionUrl) {
      this.setState({
        stateSourceOptionUrl: sourceOptionUrl
      })
    }

    if (coordinates !== oldCoordinates) {
      this.setState({
        center: coordinates
      })
    }
    if (style !== oldStyle) {
      this.setState({
        stateStyle: style
      })
    }
    if (sourceId !== oldSourceId) {
      this.setState({
        stateSourceId: sourceId
      })
    }
    if (layerType !== oldLayerType) {
      this.setState({
        stateLayerType: layerType
      })
    }
    if (sourceLayer !== oldSourceLayer) {
      this.setState({
        stateSourceLayer: sourceLayer
      })
    }
    if (layoutVisibility !== oldLayoutVisibility) {
      this.setState({
        stateLayoutVisibility: layoutVisibility
      })
    }
    if (layoutData !== oldlayoutData) {
      this.setState({
        stateLayoutData: layoutData
      })
    }
    if (paintData !== oldPaintData) {
      this.setState({
        statePaintData: paintData
      })
    }

    if (zoomNumber !== oldZoom) {
      this.setState({
        stateZoomNumber: zoomNumber
      })
    }
    this.setState({updated:false})
    setTimeout(
      function() {
        this.setState({updated:true})
      }
      .bind(this),
      100
    );
   
  }
  render() {
    const { sourceOptionType,sourceOptionUrl,coordinates,style,sourceId,layerType,sourceLayer,layoutVisibility,layerId,layoutData,paintData,zoomNumber} = this.props;
    const { stateSourceOptionType,stateSourceOptionUrl,center,stateStyle,stateSourceId,stateLayerType,stateSourceLayer,stateLayoutVisibility,stateLayerId,updated,stateLayoutData,statePaintData,stateZoomNumber} = this.state 
    return (
      <Map
        center={center  || coordinates}
        zoom={[zoomNumber]}
        flyToOptions={{
          center: center || coordinates,
          speed: 0.9,
          curve: 1,
          easing(t) {
            return t;
          }
        }}
        style={style || stateStyle}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        {/* {console.log(updated)}
        {console.log("sourceOptionType")}
        {console.log('LayerType')}
        {console.log(layerType || stateLayerType)}
        {console.log('sourceId')}
        {console.log(sourceId || stateSourceId)}
        {console.log('layerId')}
        {console.log(layerId || stateLayerId)}
        {console.log('sourceOptionType')}
        {console.log(sourceOptionType || stateSourceOptionType)}
        {console.log('sourceOptionUrl')}
        {console.log(sourceOptionUrl || stateSourceOptionUrl)}
        {console.log('sourceLayer')}
        {console.log(sourceLayer || stateSourceLayer)}
        {console.log(sourceLayer || stateSourceLayer)} */}
        {
          updated &&
            <Source id={sourceId || stateSourceId} tileJsonSource={{"type": sourceOptionType || stateSourceOptionType,"url": sourceOptionUrl || stateSourceOptionUrl}} />
        }
        {
          updated &&
            <Layer
              type={layerType || stateLayerType}
              id={layerId || stateLayerId}
              sourceId={sourceId || stateSourceId}
              sourceLayer={sourceLayer || stateSourceLayer}
              layout={layoutData || stateLayoutData}
              paint={paintData || statePaintData}
            ></Layer>
        }
      </Map>
    )
  }
}


export default MapBox

