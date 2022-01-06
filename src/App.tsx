import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Theme from 'src/constants/theme'
import { MuiThemeProvider } from '@material-ui/core'

import Routes from 'src/routes/routes'
import GlobalStyle from './styles/global'
import store from './store'
import history from './routes/history'

export const App = () => {
  return (
    <MuiThemeProvider theme={Theme}>
      <Provider store={store}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}
