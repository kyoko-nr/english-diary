import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import WelcomePage from 'pages/WelcomePage'
import EditPage from 'pages/EditPage'

import 'styles/App.scss'
import ViewPage from 'pages/ViewPage'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" component={WelcomePage} exact></Route>
        <Route path="/top" component={EditPage} exact></Route>
        <Route path="/edit/:id" component={EditPage} exact></Route>
        <Route path="/view/:id" component={ViewPage}></Route>
      </Switch>
    </Router>
  )
}

export default App
