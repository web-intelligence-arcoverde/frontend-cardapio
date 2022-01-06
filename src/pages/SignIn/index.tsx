import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { signInRequest } from 'src/store/action/user.action.js'
import { useForm } from 'react-hook-form'
import BeerLogo from 'src/assets/images/beer.png'
import { Container } from './styles'

const SignIn = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = data => dispatch(signInRequest(data))

  return (
    <Container>
      <img src={BeerLogo} alt="logo" height="24%" />

      <form
        style={{ width: '80%', display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 style={{ marginTop: '20px' }}>Inicie o atendimento</h2>

        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          margin="normal"
          color="primary"
          required
          {...register('name')}
          style={{ marginTop: '20px' }}
        />
        <TextField
          id="outlined-basic"
          label="Número da mesa"
          variant="outlined"
          type="number"
          margin="normal"
          required
          {...register('numberTable')}
        />

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '10px', height: '48px' }}
          disableElevation
          type="submit"
        >
          Iniciar
        </Button>
      </form>
    </Container>
  )
}

export default SignIn
