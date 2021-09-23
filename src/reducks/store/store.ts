import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { UsersReducer } from '../users/reducers'
import { DiariesReducer } from '../diaries/reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import * as History from 'history'
import thunk from 'redux-thunk'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function createStore(history: History.History) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      diaries: DiariesReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  )
}
