import { Container, Button } from './styles'

function Index({ title, img, onClick, background }: any) {
  return (
    <Container onClick={onClick} background={background}>
      <img src={img} />
    </Container>
  )
}

export default Index
