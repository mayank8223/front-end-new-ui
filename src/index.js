import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import configureStore, { history } from './configureStore'
import { SnackbarProvider } from 'notistack'
import { appTheme } from './muiTheme'

const store = configureStore()
const renderApp = () =>
  render(
    <MuiThemeProvider theme={appTheme}>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </SnackbarProvider>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
