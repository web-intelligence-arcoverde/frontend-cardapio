import React from 'react';
import HeaderOrder from 'src/components/molecules/HeaderOrder';
import MainOrder from 'src/components/molecules/MainOrder';
import { Container } from './styled';

const Order: React.FC = () => {
  return( 
  <Container >
    <HeaderOrder/>
    <MainOrder/>
  </Container>
  );
}
export default Order