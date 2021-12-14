import React from 'react'
import { Button } from 'src/components/atomic/Button/styles'
import Description from 'src/components/atomic/Description'
import Dishdescriptionbuttons from 'src/components/atomic/Dishdescriptionbuttons'
import Dishname from 'src/components/atomic/Dishname'
import Ingredientsofdescription from 'src/components/atomic/Ingredientsofdescription/indesx'

import { Container } from './styled'

const Maindishdescription: React.FC = () => {
  return (
    <Container>
      <Dishname />
      <Description />
      <Ingredientsofdescription />
      <Dishdescriptionbuttons />
    </Container>
  )
}

export default Maindishdescription
