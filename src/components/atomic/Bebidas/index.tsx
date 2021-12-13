import React from 'react'
import ApiBebidas from 'src/constants/api-bebidas'
import { Linee, Container } from '../Pizzas/styles'

const bebidas = ApiBebidas.map(bebida => {
  return (
    <Linee>
      <img src={bebida.photo} />
      {bebida.name}
    </Linee>
  )
})
function Bebidas() {
  return (
    <Container>
      <h4>{bebidas} </h4>
    </Container>
  )
}

export default Bebidas
