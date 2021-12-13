import React, { useState } from 'react';
import { Container,UseStateButton } from './styled';

const UseState: React.FC = () => {
  const [count,setcount] = useState(0)
    return(  
    <Container>
        <UseStateButton onClick={() => setcount(count -1)}>-</UseStateButton>
        <span>{count}</span>
        <UseStateButton onClick={() => setcount(count +1)}>+</UseStateButton>
    </Container>);
}

export default UseState;