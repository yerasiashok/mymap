import React from 'react'
import { Link } from 'react-router-dom'
import BookShelfList from './BookShelfList'
import PropTypes from 'prop-types'
import './App.css'
import * as locations from './PlacesAPI.js'

class MainComponent extends React.Component { 
  static propTypes = {
    places : PropTypes.array.isRequired
  } 
  render() {
    return (  
      <div className="container">
      <nav className="options-box">
        <h1>WIPRO Office Locations</h1>
        <div>
          <input id="places-search" type="text" placeholder="Ex: wipro limited"/>
          <input id="go-places" type="button" value="Go"/>
        </div>
        <div>
          <ul>
            {this.props.places.map((place) => (
              <li key={place.location.lat}> <a href='#' onClick="populateInfoWindow({place}, largeInfowindow)">{place.title} </a></li>
            ))}
          </ul>
        </div>
      </nav>
      <div id="map"></div>
      <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyAldCTjr02LfSu47jQGalmM_ETKPkBNQiM&v=3&callback=initMap">
        console.log("hai")
      </script>
      </div>  
    )
  }
}
export default MainComponent
