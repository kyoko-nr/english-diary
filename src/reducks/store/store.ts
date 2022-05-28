import { createStore as reduxCreateStore, combineReducers, applyMiddleware, AnyAction, Store, EmptyObject } from 'redux'
import { UsersReducer } from 'reducks/users/reducers'
import { ErrorsReducer } from 'reducks/errors/reducers'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import * as History from 'history'
import thunk from 'redux-thunk'
import { UsersAction } from 'reducks/users/types'
import { Diary, Word } from 'types/types'
import { User } from '@firebase/auth'
import { ErrorsAction } from 'reducks/errors/types'

export interface AppState {
  users: UsersInfo
  errors: ErrorsInfo
}

interface UsersInfo extends User {
  isSignedIn: boolean
  uid: string
  username: string
  email: string
  diaries: Array<Diary>
  currentYM: Date
  words: Word[]
  loading: boolean
}

interface ErrorsInfo {
  errorMsgs: Array<string>
}

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
