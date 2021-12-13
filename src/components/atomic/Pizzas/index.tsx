import React from 'react'
import ApiPizzas from 'src/constants/api-pizza'
import { Container, Line } from './styles'

function Pizzas() {
  const pizzas = ApiPizzas.map(pizza => {
    return (
      <Line>
        <img src={pizza.photo} />
        {pizza.name}
      </Line>
    )
  })
  return (
    <Container>
      <h4>{pizzas}</h4>
    </Container>
  )
}

export default Pizzas
