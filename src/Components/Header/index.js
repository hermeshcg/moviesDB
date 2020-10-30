import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';
//igonre
function Header({ handleSearchMovie, setMovieToSearch }) {
  return (
    <Container>
      <div className="title-area">
        <h1>Search for any movie</h1>
        <div className="search-area">
          <input
            type="text"
            placeholder="Insert the name of the movie here :)"
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
