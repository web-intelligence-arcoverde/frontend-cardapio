import React, { useState } from 'react'

import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-right.svg'
import { Container as ContainerDefault } from 'src/components/atomic/Container/'

import Food1 from 'src/assets/imagesMock/food.png'
import Food2 from 'src/assets/imagesMock/food2.png'
import Food3 from 'src/assets/imagesMock/food3.png'

import ItemOrder from 'src/components/atomic/ItemOrder'
import {
  Container,
  InputWithButton,
  Input,
  ButtonStyled,
  Orderslist,
  Button,
  ContainerValue,
  Label,
} from './styled'

const data = [
  {
    img: Food1,
    title: 'Um nome de comida bem grande para bugar',
    userName: 'Lucas',
    price: 30,
    amount: 2,
  },
  {
    img: Food2,
    title: 'yakisoba',
    userName: 'Lucas',
    price: 30,
    amount: 2,
  },
  {
    img: Food3,
    title: 'yakisoba',
    userName: 'Lucas',
    price: 30,
    amount: 2,
  },
  {
    img: Food1,
    title: 'yakisoba',
    userName: 'Lucas',
    price: 30,
    amount: 2,
  },
  {
    img: Food2,
    title: 'yakisoba',
    userName: 'Lucas',
    price: 30,
    amount: 2,
  },
  {
    img: Food3,
    title: 'yakisoba',
    userName: 'Lucas',
    price: 130,
    amount: 2,
  },
  {
    img: Food1,
    title: 'yakisoba',
    userName: 'Lucas',
    price: 30,
    amount: 2,
  },
  {
    img: Food2,
    title: 'yakisoba',
    userName: 'Lucas',
    price: 30,
    amount: 2,
  },
  {
    img: Food3,
    title: 'yakisoba',
    userName: 'Lucas',
    price: 330,
    amount: 2,
  },
]

const MainOrder: React.FC = () => {
  const [subTotalValue, setSubTotalValue] = useState(150)
  const [totalValue, setTotalValue] = useState(200)

  const calcValueTotal = () => {
    let total = 0
    data.map(item => {
      total += item.price
    })
    return total
  }

  console.log(calcValueTotal())

  return (
    <Container>
      <div style={{ marginTop: '10px' }} />

      <Orderslist>
        {data.map(item => {
          return (
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
              <ItemOrder item={item} />
            </div>
          )
        })}
      </Orderslist>

      <div style={{ marginTop: '20px' }} />

      <InputWithButton>
        <Input type="text" placeholder="Entre com o codigo" />
        <ButtonStyled>Aplicar</ButtonStyled>
      </InputWithButton>

      <div style={{ marginTop: '20px' }} />

      <ContainerValue>
        <ContainerDefault
          direction="row"
          justify="space-between"
          style={{ margin: '10px 0' }}
        >
          <Label>Total</Label>
          <Label>
            {calcValueTotal().toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Label>
        </ContainerDefault>
      </ContainerValue>

      <div style={{ marginTop: '20px' }} />

      <Button>
        <button>Pagamento</button>
        <ArrowRightIcon />
      </Button>
    </Container>
  )
}

export default MainOrder
