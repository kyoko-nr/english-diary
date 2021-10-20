import { Route, Switch } from 'react-router'
import { Home, Signin, Post, Signup, Reset, Error, EmailSend } from 'templates/index'
import Auth from './Auth'

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/signin" component={Signin}></Route>
      <Route exact path="/signin/reset" component={Reset}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/error/:id" component={Error}></Route>
      <Route exact path="/signin/sent" component={EmailSend}></Route>
      <Auth>
        <Route exact path="(/)?" component={Home}></Route>
        <Route exact path="/edit/:id" component={Home}></Route>
        <Route exact path="/post/:id" component={Post}></Route>
      </Auth>
    </Switch>
  )
}

export default Router
