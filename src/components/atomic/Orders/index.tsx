import React  from 'react';
import UseState  from '../UseState';

import { Container,Div1,Div2,OrderList,OrderNumber,OrderPrice } from './styled';
import ImgAleatoria from '../../../assets/images/background.png'
const Orders: React.FC = () => {
  return( 
    <Container>
        <Div1>
            <img src= {ImgAleatoria}/>
            <OrderList>
                <p><strong>batata fritaa</strong></p>
            <p>user</p>
            </OrderList>
        </Div1>
        <Div2>
            <OrderNumber>
                <UseState/>
            </OrderNumber>
            <OrderPrice>
                <p>20R$</p>
            </OrderPrice>
        </Div2>
    </Container>
    );
}

export default Orders;