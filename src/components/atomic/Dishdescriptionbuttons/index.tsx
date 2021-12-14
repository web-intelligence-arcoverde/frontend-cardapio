import React from 'react'
import ButtonGroup from 'src/components/molecules/GroupButtonCountItem'
import { Button } from '../Button/styles'
import Basket from '../../../assets/icons/lixo.svg'
import { Container } from './styled'

const Dishdescriptionbuttons: React.FC = () => {
  return (
    <Container>
      <h1>100R$</h1>
      <ButtonGroup amount={0} />
      <Button>
        <img src={Basket} />
      </Button>
    </Container>
  )
}

export default Dishdescriptionbuttons
