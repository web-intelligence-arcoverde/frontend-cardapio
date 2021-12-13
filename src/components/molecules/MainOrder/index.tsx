import React from 'react';
import Button from 'src/components/atomic/Button';
import Orders from 'src/components/atomic/Orders';
import seta  from '../../../assets/icons/right-simple-arrow.svg'
import { Container , Promotionbutton ,Orderslist,Paymentbutton} from './styled';

const MainOrder: React.FC = () => {
  return (
    <Container>
      <Orderslist>
        <Orders/>
        <Orders/>
        <Orders/>
        <Orders/>
      </Orderslist>
      <Promotionbutton>
        <input type='text' placeholder='Promoção' />
      <Button title="Enviar"/>
      </Promotionbutton>
      <Paymentbutton>
      <Button title="pagamento"/>
      <img src={seta}/>
      </Paymentbutton>
    </Container>
    );
}

export default MainOrder;