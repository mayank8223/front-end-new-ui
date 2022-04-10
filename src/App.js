import React, { Component } from 'react'
import { Routes } from './routes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import { authUserState, sessionsEntity, slotsEntity } from './reducers'
import { getCreditDetails } from './actions'
import { STUDENT } from './constants/userRole'

const styles = theme => ({
  outerTop: {
    width: '100%',
    minHeight: '100vh'
  },
  innerTop: {
    maxWidth: 1100,
    minHeight: '60vh',
    position: 'relative'
  },
  topBarBG: {
    background: theme.palette.background.paperOp(),
    height: 80
  },
  topBarBGSubsection: { background: '#fafafa', height: 80 },
  bottomAlign: {
    position: 'relative',
    height: '10rem',
    width: '100%'
  },
  innerTopStudent: {
    minHeight: '60vh',
    position: 'relative'
  }
})

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <div align='center' className={classes.outerTop}>
          <div>
            <Routes />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(withRouter(withStyles(styles)(App)))
