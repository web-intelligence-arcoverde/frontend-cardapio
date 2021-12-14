import React from 'react';
import Dishavaliation from 'src/components/atomic/Dishavaliation';
import Maindishdescription from 'src/components/molecules/Maindishdescription';
import { Container } from './styled';

const Dishdescription: React.FC = () => {
  return (
    <Container>
      <Dishavaliation/>
      <Maindishdescription/>
    </Container>
    );
}

export default Dishdescription