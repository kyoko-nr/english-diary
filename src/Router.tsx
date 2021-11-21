import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router'
import { clearErrors } from 'reducks/errors/operations'
import { Home, Signin, Post, Signup, Reset, EmailSend, MyPage, DeleteAccountConfirm } from 'templates/index'
import Auth from './Auth'

type AppRouteProps = {
  exact: boolean
  path: string
  component: React.ComponentType<RouteComponentProps<never>> | React.ComponentType
}

const AppRoute = (props: AppRouteProps): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearErrors())
  }, [props])

  return <Route exact={props.exact} path={props.path} component={props.component} />
}

const Router = (): JSX.Element => {
  return (
    <Switch>
      <AppRoute exact path="/signin" component={Signin}></AppRoute>
      <AppRoute exact path="/signin/reset" component={Reset}></AppRoute>
      <AppRoute exact path="/signup" component={Signup}></AppRoute>
      <AppRoute exact path="/signin/sent" component={EmailSend}></AppRoute>
      <Auth>
        <AppRoute exact path="(/)?" component={Home}></AppRoute>
        <AppRoute exact path="/edit/:id" component={Home}></AppRoute>
        <AppRoute exact path="/post/:id" component={Post}></AppRoute>
        <AppRoute exact path="/mypage" component={MyPage}></AppRoute>
        <AppRoute exact path="/mypage/edit" component={MyPage}></AppRoute>
        <AppRoute exact path="/mypage/delete" component={DeleteAccountConfirm}></AppRoute>
      </Auth>
    </Switch>
  )
}

export default Router
