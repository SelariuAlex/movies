import React, { Component } from 'react';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from '../../config';
import MovieImage from '../MovieImage/MovieImage';
import FourColGrid from '../FourColGrid/FourColGrid';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import MovieThumb from '../MovieThumb/MovieThumb';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../Spinner/Spinner';

import './Home.css';

class Home extends Component {
  state = {
    movies: [],
    movieImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  loadMoreItems = () => {
    const { searchTerm, currentPage } = this.state;

    let endpoint = '';
    this.setState({ loading: true });

    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage +
        1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage +
        1}`;
    }
    this.fetchItems(endpoint);
  };

  fetchItems = endpoint => {
    const { movies, movieImage } = this.state;

    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...movies, ...result.results],
          movieImage: movieImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      });
  };

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
