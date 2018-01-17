import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {

  }

  componentDidMount(){
    this._getMovies();
    /*
    .then(function)
    .catch(function(err){
      console.log(err)
    })
    */
  }

  _renderMovies = () => {
    const movies =this.state.movies.map( (movie) => {
      console.log(movie)
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}

      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      //movies
      movies : movies
    })
  }


  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sorty_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const {movies} =this.state;
    return (

      <div className={movies ? 'App' : 'App--loading'}>
        {this.state.movies ? this._renderMovies() : 'Loading!'}
      </div>
    );
  }
}

export default App;
