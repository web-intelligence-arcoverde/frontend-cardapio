import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Order from 'src/pages/Order'
import Cardapio from 'src/pages/Menu'

import Home from 'src/pages/Home'
import SignIn from 'src/pages/Send'
import Dishdescription from 'src/pages/Dishdescription'

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/entrar" component={SignIn} />

        <Route exact path="/pedidos" component={Order} />
        <Route exact path="/cardapio" component={Cardapio} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/dishdescription" component={Dishdescription} />
        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
