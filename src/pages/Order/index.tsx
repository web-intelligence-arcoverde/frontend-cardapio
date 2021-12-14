import React from 'react'
import HeaderOrder from 'src/components/molecules/HeaderOrder'
import MainOrder from 'src/components/molecules/MainOrder'
import { Container } from 'src/components/atomic/Container/'

const Order: React.FC = () => {
  return (
    <Container padding={10}>
      <HeaderOrder />
      <MainOrder />
    </Container>
  )
}
export default Order
