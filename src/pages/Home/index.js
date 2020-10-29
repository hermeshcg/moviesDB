import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Header from '../../Components/Header';
import MovieCard from '../../Components/MovieCard';
import api from '../../services/api';

function Home() {
  const [movies, setMovies] = useState([{}]);
  const [movieToSearch, setMovieToSearch] = useState('');

  async function handleSearchMovie() {
    const response = await api.get(
      `?i=tt3896198&apikey=b5fe4238&s=${movieToSearch}`
    );

    const data = response.data.Search;
    setMovies(data);
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get('?i=tt3896198&apikey=b5fe4238&s=harry');
      const data = response.data.Search;
      setMovies(data);
    }

    getData();
  }, []);

  console.log(movies);

  return (
    <Container>
      <Header
        handleSearchMovie={handleSearchMovie}
        setMovieToSearch={setMovieToSearch}
      />
      <MovieCard movies={movies} />
    </Container>
  );
}

export default Home;
