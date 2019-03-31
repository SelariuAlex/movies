import React, { Component } from 'react';
import MovieImage from '../MovieImage/MovieImage';
import FourColGrid from '../FourColGrid/FourColGrid';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../MovieThumb/MovieThumb';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../Spinner/Spinner';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="movie-home">
        <MovieImage />
        <SearchBar />
        <FourColGrid />
        <Spinner />
        <LoadMoreBtn />
      </div>
    );
  }
}

export default Home;
