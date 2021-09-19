import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { UsersReducer } from '../users/reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import * as History from 'history'

export default function createStore(history: History.History) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  )
}
