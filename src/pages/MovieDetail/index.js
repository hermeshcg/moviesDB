import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

import MovieDetails from '../../Components/MovieDetails';
import GoBackButton from '../../Components/GoBackButton';

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await api.get(`?i=${imdbID}&apikey=b5fe4238`);
      const data = response.data;
      setMovie(data);
    }
    getData();
  }, [imdbID]);

  return (
    <Container>
      <GoBackButton />
      <MovieDetails movie={movie} />
    </Container>
  );
}

//igonre

export default MovieDetail;
