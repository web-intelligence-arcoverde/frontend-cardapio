import Lottie from 'react-lottie'
import AnimationLoading from 'assets/animation/loading.json'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    speed: 200,
    autoplay: true,
    animationData: AnimationLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  )
}

export default Loading
