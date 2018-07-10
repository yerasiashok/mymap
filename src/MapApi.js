import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as MapStyles from './MapStyles.js'
import './App.css'

export class MapApi extends React.Component {
  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: this.props.places,
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props.places,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  onMouseoverMarker(props, marker, e) {
    console.log(marker)
  }
 
  render() {
        console.log(MapStyles.styles[0])

  return(
    <Map google={this.props.google}
      style={{width: '100%', height: '100%', position: 'relative'}}
      className={'map'}
      zoom={14}>
      <Marker onMouseover={this.onMouseoverMarker}
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 37.778519, lng: -122.405640}} />
      <Marker
        name={'Dolores park'}
        position={{lat: 37.759703, lng: -122.428093}} />
      <Marker />
      <Marker
        name={'Your position'}
        position={{lat: 37.762391, lng: -122.439192}}
        icon={{
          url: "/path/to/custom_icon.png",
          anchor: new window.google.maps.Point(32,32),
          scaledSize: new window.google.maps.Size(64,64)
        }} />
    </Map>
  )
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAldCTjr02LfSu47jQGalmM_ETKPkBNQiM")
})(MapApi)
