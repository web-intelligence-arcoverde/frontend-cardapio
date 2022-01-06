import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from 'src/pages/Home'
import SignIn from 'src/pages/SignIn'

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

const ListProducts = lazy(() =>
  import('src/pages/Menu/index').then(module => ({
    default: module.Home,
  })),
)

const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/entrar" component={SignIn} />
        <Route exact path="/cardapio" component={ListProducts} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}

export default Routes
