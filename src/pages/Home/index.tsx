import Lottie from 'react-lottie'
import { useRef } from 'react'
import { useHistory } from 'react-router'
import { Container } from './styled'
import AnimationData from '../../assets/animation/beer.json'

const Home = () => {
  const defaultOptions = {
    loop: false,
    speed: 200,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const history = useHistory()

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () => {
              history.push('/entrar')
            },
          },
        ]}
      />
    </Container>
  )
}

export default Home
