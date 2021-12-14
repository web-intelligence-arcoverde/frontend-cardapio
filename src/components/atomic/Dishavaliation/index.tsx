import React from 'react';

import { Container } from './styled';
import Whitestar from '../../../assets/icons/white-Star.svg';

const Dishavaliation: React.FC = () => {
  return (
    <Container>
      <h1>4.5</h1>
      <img src={Whitestar}/>
    </Container>
  );
}

export default Dishavaliation;