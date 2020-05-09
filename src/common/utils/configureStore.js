import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '@/reducers/'

const persistConfig = {
  key: 'root',
  storage
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  const persistor = persistStore(store)

  return { store, persistor }
}
