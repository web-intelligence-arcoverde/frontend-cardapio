import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { signInRequest } from 'src/store/action/user.action.js'
import { useForm } from 'react-hook-form'
import BeerLogo from 'src/assets/images/beer.png'
import { useHistory } from 'react-router'
import { Container } from './styles'

const SignIn = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const history = useHistory()

  const onSubmit = data => history.push('/cardapio')

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
          label="Email"
          variant="outlined"
          margin="normal"
          color="primary"
          type="email"
          required
          {...register('name')}
          style={{ marginTop: '20px' }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
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
