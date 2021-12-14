import Logo from 'assets/icons/logo.svg'
import {
  TextField,
  FormControl,
  MuiThemeProvider,
  Button,
} from '@material-ui/core'
import { Container } from './styles'
import Theme from '../../constants/theme'

function Send() {
  return (
    <Container>
      <img src={Logo} alt="logo" />

      <MuiThemeProvider theme={Theme}>
        <FormControl style={{ width: '80%' }}>
          <h2>Inicie o atendimento</h2>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            margin="normal"
            color="primary"
          />
          <TextField
            id="outlined-basic"
            label="Número da mesa"
            variant="outlined"
            type="number"
            margin="normal"
          />

          <TextField
            id="outlined-basic"
            label="Codigo da mesa"
            variant="outlined"
            type="number"
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '10px', height: '48px' }}
            disableElevation
          >
            Iniciar
          </Button>
        </FormControl>
      </MuiThemeProvider>
    </Container>
  )
}

export default Send
