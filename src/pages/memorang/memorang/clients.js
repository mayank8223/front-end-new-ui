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
import AddClientModal from '../../../components/ModalToAddClient'

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
  AddUserButton: {
    color: 'black',
    width: '12%',
    marginTop: '2%'
  }
})

const ClientsPage = props => {
  const { classes, clientInfo, clientSelection, createNewClient } = props
  const [showUserModal, setShowUserModal] = React.useState(false)
  const onSubmitCreateNewUser = data => {
    createNewClient(data)
    setShowUserModal(false)
  }

  const handleClientSelection = row => clientSelection(row)

  return (
    <React.Fragment>
      <Paper>
        <Typography className={classes.clientHeadingText}>
          All Client Details
        </Typography>
        <Box className={classes.paperClass}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>client Name</TableCell>
                  <TableCell align='center'>country</TableCell>
                  <TableCell align='center'>timezone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clientInfo &&
                  clientInfo.length > 0 &&
                  clientInfo.map(row => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 }
                      }}
                    >
                      <TableCell component='th' scope='row'>
                        <ButtonBase
                          variant='outlined'
                          onClick={() => handleClientSelection(row)}
                        >
                          <Typography className={classes.clientText}>
                            {row.name}
                          </Typography>
                        </ButtonBase>
                      </TableCell>

                      <TableCell align='center'>{row.country}</TableCell>
                      <TableCell align='center'>{row.timezone}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <Button
              variant='outlined'
              onClick={() => setShowUserModal(true)}
              className={classes.AddUserButton}
            >
              Add Client
            </Button>
          </TableContainer>
        </Box>
        {showUserModal && (
          <AddClientModal
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
