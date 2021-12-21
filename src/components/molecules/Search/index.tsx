import Enter from 'assets/icons/funilverde.svg'
import Input from 'src/components/atomic/Input/Icon'
import Button from 'src/components/atomic/Button'

import { Container } from 'src/components/atomic/Container'

function Search() {
  return (
    <Container direction="row" padding={10} style={{ height: '100%' }}>
      <Input leftIcon="search" />
    </Container>
  )
}

export default Search
