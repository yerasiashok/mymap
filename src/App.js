import React from 'react'
import { Route } from 'react-router-dom'
import * as PlacesAPI from './PlacesAPI.js'
import * as MapStyles from './MapStyles.js'
import './App.css'
//import SearchComponent from './SearchComponent'
import MainComponent from './MainComponent'

class BooksApp extends React.Component {
  state = {
    placesList: PlacesAPI.locations,
    styles: MapStyles.styles
  }
  
  componentWillMount () {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyAldCTjr02LfSu47jQGalmM_ETKPkBNQiM&v=3&callback=initMap";
    script.async = true;
    document.body.appendChild(script);

  /*fetch("https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyAldCTjr02LfSu47jQGalmM_ETKPkBNQiM&v=3")
        .then(res => res.json())
        .then(
          (result) => { 
            console.log("hai")
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error)
          }
        )
*/


  }
  /*changeShelf = (modifiedbook, newShelf) => {
    BooksAPI.update(modifiedbook, newShelf).then((res) => {
      (modifiedbook.shelf = newShelf) && this.setState(state => ({
        books: state.books.filter(book => book.id !== modifiedbook.id).concat([ modifiedbook ])
      }))
    })
  }*/

  render() {
    //console.log(this.state.placesList)
    return (
      <div className="container">

        <Route exact path='/' render={() => (
          <MainComponent
            //mapinit={this.initMap}
            places={this.state.placesList}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
