import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';

import api from '../../services/api';

function Header() {
  const [movieToSearch, setMovieToSearch] = useState('');

  async function handleSearchMovie() {
    /* const response = await api.get(
      `movie/popular?api_key=760b1c8986bdec960d27b984c56bea47`
    );

    const data = response.data;
    setMovies(data); */
  }

  return (
    <Container>
      <div className="title-area">
        <h1>Search for movies</h1>
        <div className="search-area">
          <input
            type="text"
            placeholder="Search for the title of the movie"
            onChange={(e) => setMovieToSearch(e.target.value)}
          />
          <button type="button" onClick={handleSearchMovie}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="themdb">
        <p>Data provided by: </p>
        <a
          href="https://www.themoviedb.org/documentation/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          OMBD API
        </a>
      </div>
    </Container>
  );
}

export default Header;
