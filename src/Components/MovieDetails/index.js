import React from 'react';

import { Container } from './styles';

function MovieDetails({ movie }) {
  return (
    <Container>
      {Object.keys(movie).length === 0 ? (
        <h1>Loading data</h1>
      ) : (
        <>
          <img src={movie.Poster} alt={movie.Title} />
          <main>
            <h1>{movie.Title}</h1>

            <div className="movie-infos">
              <strong>
                Plot: <span>{movie.Plot}</span>
              </strong>
              <strong>
                Released: <span>{movie.Released}</span>
              </strong>
              <strong>
                Director: <span>{movie.Director}</span>
              </strong>
              <strong>
                Actors: <span>{movie.Actors}</span>
              </strong>
              <strong>
                Genre: <span>{movie.Genre}</span>
              </strong>
              <strong>
                Runtime: <span>{movie.Runtime}</span>
              </strong>
              <strong>
                Awards: <span>{movie.Awards}</span>
              </strong>
              <strong>
                IMDB Rating: <span>{movie.imdbRating}</span>
              </strong>
            </div>
          </main>
        </>
      )}
    </Container>
  );
}

export default MovieDetails;
