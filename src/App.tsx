import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core'

import WelcomePage from 'components/pages/WelcomePage'
import TopPage from 'components/pages/TopPage'

function App(): JSX.Element {
  return (
    <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route path="/welcome" component={WelcomePage} exact></Route>
          <Route path="/top" component={TopPage} exact></Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
