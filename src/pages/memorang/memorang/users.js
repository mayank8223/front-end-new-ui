import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  ButtonBase,
  Typography,
  Box,
  Button
} from '@material-ui/core'
import AddUserModal from '../../../components/ModalToUserAdd'

const styles = theme => ({
  clientText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 'large'
  },
  paperClass: {
    width: '100%',
    paddingTop: '2%'
  },
  clientHeadingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 'x-large'
  },
  backButton: {
    color: 'black',
    position: 'absolute',
    width: '12%',
    marginTop: '0%'
  },
  AddUserButton: {
    color: 'black',
    width: '12%',
    marginTop: '2%'
  }
})

const ClientsPage = props => {
  const {
    classes,
    userInfoByClientId,
    selectedClient,
    sendBackToClient,
    createNewUser
  } = props

  const [showUserModal, setShowUserModal] = React.useState(false)
  const onSubmitCreateNewUser = data => {
    createNewUser({
      ...data,
      clientId: selectedClient.id
    })
    setShowUserModal(false)
  }
  return (
    <React.Fragment>
      <Paper>
        <Typography className={classes.clientHeadingText}>
          {`All User Details Of ${selectedClient.name}`}
        </Typography>
        <Button
          variant='outlined'
          className={classes.backButton}
          onClick={sendBackToClient}
        >
          Back
        </Button>
        <Box className={classes.paperClass}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>User Name</TableCell>
                  <TableCell align='center'>Country</TableCell>
                  <TableCell align='center'>Timezone</TableCell>
                  <TableCell align='center'>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userInfoByClientId &&
                  userInfoByClientId.length > 0 &&
                  userInfoByClientId.map(row => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 }
                      }}
                    >
                      <TableCell component='th' scope='row'>
                        {row.name}
                      </TableCell>{' '}
                      <TableCell align='center'>{row.country}</TableCell>
                      <TableCell align='center'>{row.timezone}</TableCell>
                      <TableCell align='center'>{row.email}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <Button
              variant='outlined'
              onClick={() => setShowUserModal(true)}
              className={classes.AddUserButton}
            >
              Add User
            </Button>
          </TableContainer>
        </Box>
        {showUserModal && (
          <AddUserModal
            openModal={true}
            handleClose={() => setShowUserModal(false)}
            onSubmit={onSubmitCreateNewUser}
          />
        )}
      </Paper>
    </React.Fragment>
  )
}

export default withStyles(styles)(ClientsPage)
