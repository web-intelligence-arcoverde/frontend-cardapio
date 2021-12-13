import React from 'react'
import apiSaladas from 'src/constants/api-saladas'
import { Line, Container } from '../Pizzas/styles'

function Saladas() {
  const saladas = apiSaladas.map(salada => {
    return (
      <Line>
        <img src={salada.photo} />
        {salada.name}
      </Line>
    )
  })
  return (
    <Container>
      <h4>{saladas}</h4>
    </Container>
  )
}

export default Saladas
