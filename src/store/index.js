import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import cRducer from './reducer'
import sagas from './sagas'

// 创建中间件
const sagaMiddleware = createSagaMiddleware()

// 应用中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(cRducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

export default store
