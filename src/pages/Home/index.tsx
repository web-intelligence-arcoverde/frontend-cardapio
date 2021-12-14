import Logo from 'assets/icons/logo.svg'
import { Container } from 'components/atomic/Container/'

const Home = () => {
  return (
    <Container
      style={{
        height: '100vh',
        backgroundImage: '#fff',
        backgroundPosition: 'left',
      }}
    >
      <img src={Logo} alt="logo" />
    </Container>
  )
}

export default Home
