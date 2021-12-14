import React, { useState } from 'react'
import { Container } from 'src/components/atomic/Container/'
import { ReactComponent as BagIcon } from 'src/assets/icons/bag.svg'
import { ReactComponent as CloseIcon } from 'src/assets/icons/close-icon.svg'

const HeaderOrder: React.FC = () => {
  const [numbersOrder, setNumbersOrders] = useState(2)

  return (
    <Container
      direction="row"
      justify="space-between"
      style={{ marginTop: '10px', marginBottom: '10px' }}
    >
      <Container direction="row" align="center" justify="space-between">
        <div style={{ width: '60%' }}>
          <h3 style={{ fontSize: '24px' }}>Seu Pedido</h3>
        </div>
        <Container direction="row">
          <BagIcon style={{ marginRight: '8px' }} />
          <h6 style={{ fontSize: '14px' }}>{numbersOrder} </h6>
        </Container>
      </Container>
      <div>
        <CloseIcon />
      </div>
    </Container>
  )
}

export default HeaderOrder
