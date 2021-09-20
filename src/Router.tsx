import { Route, Switch } from 'react-router'
import { Home, Login, Post, Signup } from 'templates/index'

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="(/)?" component={Home}></Route>
      <Route path="/edit/:id" component={Home}></Route>
      <Route path="/posts/:id" component={Post}></Route>
    </Switch>
  )
}

export default Router
