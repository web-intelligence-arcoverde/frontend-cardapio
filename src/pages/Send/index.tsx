import { Container } from './styles'
import Logo from 'assets/icons/logo.svg'
import {
  TextField,
  FormControl,
  MuiThemeProvider,
  Button,
} from '@material-ui/core'
import Theme from '../../constants/theme'

function Send() {
  return (
    <Container>
      <img src={Logo} />

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
            label="Número da Mesa"
            variant="outlined"
            type="number"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '10px', height: '48px' }}
          >
            Iniciar
          </Button>
        </FormControl>
      </MuiThemeProvider>
    </Container>
  )
}

export default Send
