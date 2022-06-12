import { createStore as reduxCreateStore, combineReducers, applyMiddleware, AnyAction, Store, EmptyObject } from 'redux'
import { UsersReducer } from 'reducks/users/reducers'
import { ErrorsReducer } from 'reducks/errors/reducers'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import * as History from 'history'
import thunk from 'redux-thunk'
import { UsersAction } from 'reducks/users/types'
import { UsersInfo, ErrorsInfo } from './types'
import { ErrorsAction } from 'reducks/errors/types'

export default function createStore(history: History.History): Store<
  EmptyObject & {
    router: RouterState<unknown>
    users: UsersInfo
    errors: ErrorsInfo
  },
  AnyAction | UsersAction | ErrorsAction
> {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      errors: ErrorsReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  )
}
