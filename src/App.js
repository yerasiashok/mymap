import React from 'react'
import { Route } from 'react-router-dom'
import * as PlacesAPI from './PlacesAPI.js'
//import * as MapStyles from './MapStyles.js'
import './App.css'
import MainComponent from './MainComponent'

class MapsApp extends React.Component {
  state = {
    placesList: PlacesAPI.locations,
    //styles: MapStyles.styles,
    markers: []
  }
  render() {
    return (
      <div className="container">

        <Route exact path='/' render={() => (
          <MainComponent
            displayLocations={this.displayLocations}
            places={this.state.placesList}
          />
        )}/>

      </div>
    )
  }
}

export default MapsApp