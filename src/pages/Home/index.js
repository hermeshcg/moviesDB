import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Header from '../../Components/Header';
import MovieCard from '../../Components/MovieCard';
import api from '../../services/api';

//igonre

function Home() {
  const [movies, setMovies] = useState([{}]);
  const [movieToSearch, setMovieToSearch] = useState('');

  async function handleSearchMovie(event) {
    event.preventDefault();
    await api
      .get(`?i=tt3896198&apikey=b5fe4238&s=${movieToSearch}`)
      .then((response) => {
        const data = response.data.Search;
        setMovies(data);
      })
      .catch((error) => {
        alert('Erro ao pesquisar');
        return;
      });
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get('?i=tt3896198&apikey=b5fe4238&s=harry');
      const data = response.data.Search;
      setMovies(data);
    }

    getData();
  }, []);

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
