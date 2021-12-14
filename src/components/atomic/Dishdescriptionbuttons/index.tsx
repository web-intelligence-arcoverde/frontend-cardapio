import React from 'react';
import { Button } from '../Button/styles';
import UseState from '../UseState';
import Basket from '../../../assets/icons/lixo.svg';
import { Container } from './styled';

const Dishdescriptionbuttons: React.FC = () => {
  return(
    <Container>
      <h1>100R$</h1>
      <UseState/>
      <Button><img src={Basket}/></Button>
    </Container>
  );
}

export default Dishdescriptionbuttons;