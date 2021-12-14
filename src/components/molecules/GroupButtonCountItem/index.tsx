import React, { useState } from 'react'
import { Container, IconButton } from './styled'

const Index = ({ amount }: any) => {
  const [count, setcount] = useState(amount)

  const addItem = () => {
    setcount(count + 1)
  }

  const removeItem = () => {
    if (count > 0) {
      setcount(count - 1)
    }
  }

  return (
    <Container>
      <IconButton onClick={removeItem}>-</IconButton>
      <h6>{amount}</h6>
      <IconButton onClick={addItem}>+</IconButton>
    </Container>
  )
}

export default Index
