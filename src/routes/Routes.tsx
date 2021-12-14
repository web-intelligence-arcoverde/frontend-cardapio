import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import Order from 'src/pages/Order'

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/pedidos" component={Order} />
      </Switch>
    </Suspense>
  )
}
