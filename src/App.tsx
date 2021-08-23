import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import WelcomePage from 'components/pages/WelcomePage'
import TopPage from 'components/pages/TopPage'

import 'App.scss'

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/welcome" component={WelcomePage} exact></Route>
          <Route path="/top" component={TopPage} exact></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
