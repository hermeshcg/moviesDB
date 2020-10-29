import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function MovieCard({ movies }) {
  return (
    <Container>
      {movies.map((movie) => (
        <div className="card">
          <img src={movie.Poster} alt={movie.Title} />
          <strong>{movie.Title}</strong>
          <span>{movie.Year}</span>
          <Link className="link" to={`movie/${movie.imdbID}`}>
            Go to details
          </Link>
        </div>
      ))}
    </Container>
  );
}

export default MovieCard;
