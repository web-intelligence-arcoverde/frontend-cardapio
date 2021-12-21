import Logo from 'assets/icons/logo.svg'
import { Container } from './styled'
import Lottie from 'react-lottie'
import animationData from '../../assets/animation/beer.json'

import { useHistory } from "react-router-dom";

function Home() {

  const history = useHistory();

  const handleClick = () => {
    history.push("/entrar");
  }

 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  
    
  }

  const handleAnimationComplete = () =>{
    console.log("teu cu")
  }

  

  
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={300}
        width={200}
        eventListeners={[
          {
            eventName: 'complete',
            callback: handleClick
          }
        ]}
       
      
        
        
      />
    </Container>
  )
}

export default Home
