import { Route, Switch } from 'react-router'
import { Home, Signin, Post, Signup, Reset } from 'templates/index'
import Auth from './Auth'

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/signin" component={Signin}></Route>
      <Route exact path="/signin/reset" component={Reset}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Auth>
        <Route path="(/:id)?" component={Home}></Route>
        <Route path="/post/:id" component={Post}></Route>
      </Auth>
    </Switch>
  )
}

export default Router
