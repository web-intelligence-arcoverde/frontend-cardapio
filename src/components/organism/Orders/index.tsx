import React from 'react'
import { Container } from 'src/components/atomic/Container/'
import GroupButtonCountItem from '../../molecules/GroupButtonCountItem'

import {
  ContainerImg,
  ContainerInformation,
  TitleProduct,
  NameOrder,
  ContainerAction,
  PriceItem,
} from './styled'
import ImgAleatoria from '../../../assets/images/background.png'

const Orders: React.FC = () => {
  return (
    <Container direction="row" style={{ height: '73px' }}>
      <Container direction="row" justify="flex-start">
        <ContainerImg>
          <img src={ImgAleatoria} alt="img" height="100%" width="100%" />
        </ContainerImg>

        <ContainerInformation>
          <TitleProduct>batata fritaa</TitleProduct>
          <NameOrder>lucas henrique</NameOrder>
        </ContainerInformation>
      </Container>

      <ContainerAction>
        <GroupButtonCountItem />
        <div style={{ marginLeft: '8px' }} />
        <PriceItem>20R$</PriceItem>
      </ContainerAction>
    </Container>
  )
}

export default Orders
