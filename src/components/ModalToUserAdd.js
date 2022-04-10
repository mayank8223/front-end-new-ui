import React from 'react'
import {
  Modal,
  Paper,
  Grid,
  TextField,
  Button,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  clientText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 'large'
  },
  paperClass: {
    height: '40%',
    width: '50%',
    textAlign: 'center',
    rounded: true,
    margin: 'auto',
    position: 'absolute',
    left: '25%',
    top: '15%'
  },
  clientHeadingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 'x-large'
  },
  buttonSubmit: {
    width: '35%'
  },
  buttonCancel: {
    width: '35%',
    marginRight: '20%'
  }
})

const AddUserModal = props => {
  const { classes, openModal, handleClose, onSubmit } = props

  const [modalState, setModalState] = React.useState({})

  const handleNameChange = e =>
    setModalState({ ...modalState, name: e.target.value })
  const handleCountryChange = e =>
    setModalState({ ...modalState, country: e.target.value })
  const handleTimezoneChange = e =>
    setModalState({ ...modalState, timezone: e.target.value })
  const handleEmailChange = e =>
    setModalState({ ...modalState, email: e.target.value })

  const isDisabled = () => {
    const { name, timezone, country, email } = modalState
    if (!name || !timezone || !country || !email) return true
    return false
  }

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Paper className={classes.paperClass}>
        <Typography className={classes.clientHeadingText}>
          {`Add New User`}
        </Typography>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={1}
        >
          <Grid item xs={6}>
            <TextField
              id='name'
              variant='outlined'
              label='User Name'
              name='name'
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='country'
              variant='outlined'
              label='Country'
              name='country'
              onChange={handleCountryChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='timezone'
              label='Time Zone'
              variant='outlined'
              name='timezone'
              onChange={handleTimezoneChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='email'
              variant='outlined'
              label='Email'
              name='email'
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              onClick={() => handleClose(true)}
              className={classes.buttonCancel}
            >
              cancel
            </Button>
            <Button
              variant='contained'
              onClick={() => onSubmit(modalState)}
              disabled={isDisabled()}
              className={classes.buttonSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  )
}

export default withStyles(styles)(AddUserModal)
