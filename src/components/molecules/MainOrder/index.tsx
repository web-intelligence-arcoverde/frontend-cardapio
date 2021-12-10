import React from 'react';
import Orders from 'src/components/atomic/Orders';
import { Container } from './styled';

const MainOrder: React.FC = () => {
  return (
    <Container>
        <Orders/>
        <Orders/>
        <Orders/>
        <Orders/>
    </Container>
    );
}

export default MainOrder;