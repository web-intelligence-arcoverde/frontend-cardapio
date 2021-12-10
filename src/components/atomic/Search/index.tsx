import Lupa from 'assets/icons/lupa.svg'
import { Container, Text } from './styles'
import Enter from 'assets/icons/funilverde.svg'
import Button from '../Button'

function Search() {
  return (
    <Container>
      <Text>
        <img id="search" src={Lupa} />
        <input id="search" type="text" placeholder="Procurar" />
      </Text>
      <div style={{ width: '40px' }}>
        <Button img={Enter} />
      </div>
    </Container>
  )
}

export default Search
