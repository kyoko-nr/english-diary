import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'

import WelcomePage from 'pages/WelcomePage'
import TopPage from 'pages/TopPage'

import 'App.scss'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: yellow[500],
//     }
//   }
// })

function App(): JSX.Element {
  return (
    // <ThemeProvider theme={theme}>
    <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route path="/welcome" component={WelcomePage} exact></Route>
          <Route path="/top" component={TopPage} exact></Route>
        </Switch>
      </Router>
    </Container>
    // </ThemeProvider>
  )
}

export default App
