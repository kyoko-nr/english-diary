import Router from 'Router'
import { createTheme, ThemeProvider } from '@material-ui/core'
import 'styles/App.scss'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4283B8',
      dark: '#2c6fa5',
    },
    secondary: {
      main: '#FFDB46',
      dark: '#dfbb2b',
    },
    info: {
      main: '#681EB3',
      dark: '#490f83',
    },
    text: {
      primary: '#4a4a4a',
    },
  },
  typography: {
    fontSize: 14,
  },
})

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Router />
      </main>
    </ThemeProvider>
  )
}

export default App
