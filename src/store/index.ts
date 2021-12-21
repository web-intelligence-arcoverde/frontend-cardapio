import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import history from 'src/routes/history'

import { routerMiddleware } from 'connected-react-router'

import rootReducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(
  rootReducers(history),
  {},
  applyMiddleware(...middleware, routerMiddleware(history), logger),
)

sagaMiddleware.run(rootSaga)

export default store
