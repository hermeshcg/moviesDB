import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';
//igonre
function Header({ handleSearchMovie, setMovieToSearch }) {
  return (
    <Container>
      <div className="title-area">
        <h1>Search for movies</h1>

        <form onSubmit={handleSearchMovie}>
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
        </form>
      </div>
      <div className="themdb">
        <p>Data provided by: </p>
        <a
          href="http://www.omdbapi.com"
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
