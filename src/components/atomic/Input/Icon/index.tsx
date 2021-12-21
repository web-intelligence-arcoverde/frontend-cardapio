import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg'
import { Container, Input } from './style'

const Icons = {
  search: <SearchIcon />,
}

const Index = ({ leftIcon, rightIcon }) => {
  return (
    <Container>
      {leftIcon && Icons[leftIcon]}
      <Input placeholder="teste" />
      {rightIcon && Icons[rightIcon]}
    </Container>
  )
}

export default Index
