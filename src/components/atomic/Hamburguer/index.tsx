import React from 'react'
import ApiHamburguer from 'src/constants/api-hambuguer'
import { Line, Container } from '../Pizzas/styles'

function Hamburguer() {
  const hamburguers = ApiHamburguer.map(hamburguer => {
    return (
      <Line>
        <img src={hamburguer.photo} />
        {hamburguer.name}
      </Line>
    )
  })
  return (
    <Container>
      <h4>{hamburguers}</h4>
    </Container>
  )
}

export default Hamburguer
