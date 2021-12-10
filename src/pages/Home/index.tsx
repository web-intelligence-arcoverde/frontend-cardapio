import Logo from 'assets/icons/logo.svg'
import { Container } from '../Example/styles'
import Background from 'assets/images/background1.png'

function Home() {
  return (
    <Container
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'left',
      }}
    >
      <img src={Logo} />
    </Container>
  )
}

export default Home
