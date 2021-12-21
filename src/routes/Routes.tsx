import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from 'src/pages/Home'
import SignIn from 'src/pages/SignIn'
import Menu from 'src/pages/Menu'

import Order from 'src/pages/Order'
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
        <Route exact path="/cardapio" component={Menu} />

        <Route exact path="/pedidos" component={Order} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/dishdescription" component={Dishdescription} />
        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
