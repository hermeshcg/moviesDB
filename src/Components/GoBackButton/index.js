import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function GoBackButton() {
  return (
    <Container>
      <Link className="link" to="/">
        Go back
      </Link>
    </Container>
  );
}

export default GoBackButton;
