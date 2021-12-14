import { Container } from 'src/components/atomic/Container/'
import GroupButtonCountItem from '../../molecules/GroupButtonCountItem'

import {
  ContainerImg,
  ContainerInformation,
  TitleProduct,
  NameOrder,
  ContainerAction,
  PriceItem,
} from './style'

const ItemOrder = (item: any) => {
  const { img, title, userName, price, amount } = item.item

  return (
    <Container
      direction="row"
      style={{ height: '73px', paddingLeft: '8px', paddingRight: '8px' }}
    >
      <Container direction="row" justify="flex-start">
        <ContainerImg>
          <img src={img} alt="img" height="100%" width="100%" />
        </ContainerImg>

        <ContainerInformation>
          <TitleProduct
            style={{
              maxWidth: '90px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </TitleProduct>
          <NameOrder>{userName}</NameOrder>
        </ContainerInformation>
      </Container>

      <ContainerAction>
        <GroupButtonCountItem amount={amount} />
        <div style={{ marginLeft: '8px' }} />
        <PriceItem>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </PriceItem>
      </ContainerAction>
    </Container>
  )
}

export default ItemOrder
