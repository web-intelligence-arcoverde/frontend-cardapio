import Lupa from 'assets/icons/lupa.svg'
import { Card, Text, Container } from './styles'
import Enter from 'assets/icons/funilverde.svg'
import Button from '../../atomic/Button'

function Search() {
  return (
    <Container>
      <Card>
        <Text>
          <img id="search" src={Lupa} />
          <input id="search" type="text" placeholder="Procurar" />
        </Text>
        <div style={{ width: '40px', marginLeft: '10px' }}>
          <Button img={Enter} background="white" />
        </div>
      </Card>
    </Container>
  )
}

export default Search
