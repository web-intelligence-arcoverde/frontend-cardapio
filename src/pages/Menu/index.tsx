import NavMenu from 'src/components/molecules/NavMenu'
import Search from 'src/components/molecules/Search'
import { Container } from './styles'

function Menu() {
  return (
    <Container>
      <Search />
      <NavMenu />
    </Container>
  )
}

export default Menu
