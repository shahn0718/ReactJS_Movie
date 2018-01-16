import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


const movieTitles = [
    'Matrix',
    'OldBoy',
    'HarryPotter',
    'Avengers',
]

const movieImages = [
  'http://imgc.allpostersimages.com/img/posters/the-matrix_u-L-F4S5W20.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg',
  'https://i.pinimg.com/736x/8f/f6/0f/8ff60f020b18bd5468193fbffebcb33c--david-yates-the-order.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/51fzL7oijUL._AC_UL320_SR214,320_.jpg',
]

class App extends Component {
  render() {
    return (
      <div className="App">
       <Movie title={movieTitles[0]} poster={movieImages[0]}/>
       <Movie title={movieTitles[1]} poster={movieImages[1]}/>
       <Movie title={movieTitles[2]} poster={movieImages[2]}/>
       <Movie title={movieTitles[3]} poster={movieImages[3]}/>

      </div>
    );
  }
}

export default App;
