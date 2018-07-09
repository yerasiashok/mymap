import React from 'react'
//import { Link } from 'react-router-dom'
//import BookShelfList from './BookShelfList'
import PropTypes from 'prop-types'
import './App.css'
import * as MapStyles from './MapStyles.js'
//import * as locations from './MapAPI.js'

class MainComponent extends React.Component { 
  static propTypes = {
    places: PropTypes.array.isRequired
    //mapinit : PropTypes.func.isRequired
  } 
  state = {
    filteredPlaces: this.props.places
  }
  onChangeFilter = (event) => {
    var updatedList = this.props.places;
    updatedList = updatedList.filter(function(item){
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredPlaces: updatedList});
    window.displayLocations(updatedList);
  }
  render() {
    return (  
      <div className="container">
      <nav className="options-box">
        <h1>WIPRO Office Locations</h1>
        <div>
          <input id="places-search" type="text" placeholder="Ex: wipro limited" onChange={(e) => this.onChangeFilter(e)}/>
          <input id="go-places" type="button" value="Filter"/>
        </div>
        <div>
          <ul>
            {this.state.filteredPlaces.map((place) => (
              <li key={place.title} > <a href="#" onClick={(e) => window.displayLocations([place])}>{place.title} </a></li>
            ))}
          </ul>
        </div>
      </nav>
      <div id="map"></div>
      
      </div>  
    )
  }
}
export default MainComponent
