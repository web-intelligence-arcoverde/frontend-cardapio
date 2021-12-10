import { Container, Button } from './styles'

function Index({ title, img, onClick, background }: any) {
  return (
    <Container>
      <Button onClick={onClick} background={background}>
        <img src={img} />
        {title}
      </Button>
    </Container>
  )
}

export default Index
