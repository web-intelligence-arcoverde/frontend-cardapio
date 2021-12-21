import NavMenu from 'components/molecules/NavMenu'
import Search from 'src/components/molecules/Search'
import { Container } from './styles'

const MenuList = () => {
  return (
    <Container>
      <Search />
      <NavMenu />
    </Container>
  )
}

export default MenuList
