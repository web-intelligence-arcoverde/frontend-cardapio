import React from 'react';
import { Container } from './styled';
import { Div } from './styled';
import BagIcon from '../../../assets/icons/Bag2.svg'
const HeaderOrder: React.FC = () => {
  return (
      <Container>
          <Div>
          <h1>seu pedido</h1>
          <img src={BagIcon} />
          </Div>
          <h1>x</h1>
      </Container>
  );
}

export default HeaderOrder;