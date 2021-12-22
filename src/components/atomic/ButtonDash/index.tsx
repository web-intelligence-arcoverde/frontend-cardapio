import React from 'react'
import { Button, Container } from './styled'

function ButtonDash({ text, img, onClick }: any) {
  return (
    <Container>
      <img src={img} />
      <Button onClick={onClick}>{text}</Button>
    </Container>
  )
}

export default ButtonDash
