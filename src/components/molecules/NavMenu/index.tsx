import React, { useState } from 'react'
import Bebidas from 'src/components/atomic/Bebidas'
import Button from 'src/components/atomic/Button/index'
import Hamburguer from 'src/components/atomic/Hamburguer'
import Saladas from 'src/components/atomic/Saladas'
import Pizzas from '../../atomic/Pizzas'
import { Container, CardBtns } from './styled'

function NavMenu() {
  const [optionComponent, setOptionComponent] = useState('default')
  const Components = {
    default: <Pizzas />,
    hamburguer: <Hamburguer />,
    saladas: <Saladas />,
    bebidas: <Bebidas />,
  }
  return (
    <Container>
      <CardBtns>
        <Button title="Pizzas" onClick={() => setOptionComponent('default')} />
        <Button
          title="Hamburguer"
          onClick={() => setOptionComponent('hamburguer')}
        />
        <Button title="Saladas" onClick={() => setOptionComponent('saladas')} />
        <Button title="Bebidas" onClick={() => setOptionComponent('bebidas')} />
      </CardBtns>
      {Components[optionComponent]}
    </Container>
  )
}

export default NavMenu
