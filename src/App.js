import React from 'react'
import { Route } from 'react-router-dom'
import * as PlacesAPI from './PlacesAPI.js'
import './App.css'
//import SearchComponent from './SearchComponent'
import MainComponent from './MainComponent'

class BooksApp extends React.Component {
  state = {
    placesList: [],
  }

  componentWillMount() {
    this.setState({ placesList : PlacesAPI.getAll() })
    //console.log(this.state.placesList)
  }

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAldCTjr02LfSu47jQGalmM_ETKPkBNQiM&v=3&callback=initMap";
    script.async = true;
    document.body.appendChild(script);
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
            //onChangeFilter={this.filterList}
            places={this.state.placesList}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
