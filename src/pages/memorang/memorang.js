import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Button, Grid } from '@material-ui/core'
import {
  getUserMemoInfo,
  getClientInfo,
  getUserMemoInfoByClientId,
  createNewClient,
  createNewUser
} from '../../actions'
import { userProfileEntity } from '../../reducers'
import ClientsPage from './memorang/clients'
import UsersPage from './memorang/users'

const styles = theme => ({
  actionBtn: {
    margin: 0
  }
})

const MemorangPages = props => {
  const {
    getClientInfo,
    clientInfo,
    getUserMemoInfoByClientId,
    userInfoByClientId,
    createNewUser,
    createNewClient,
    createNewClientDone,
    createNewUserDone
  } = props

  console.log('==>createNewClientDone', createNewClientDone)
  const [selectedClient, setSelectedClient] = React.useState([])
  const clientSelection = data => {
    setSelectedClient(data)
    if (data && data.id) getUserMemoInfoByClientId(data.id)
  }

  const sendBackToClient = () => setSelectedClient([])
  React.useEffect(() => {
    getClientInfo()
  }, [createNewClientDone])
  React.useEffect(() => {
    getUserMemoInfoByClientId(selectedClient.id)
  }, [createNewUserDone])
  const renderClientInfo = () => {
    return (
      <React.Fragment>
        <Grid>
          <ClientsPage
            clientInfo={clientInfo}
            clientSelection={clientSelection}
            createNewClient={createNewClient}
          />
        </Grid>
      </React.Fragment>
    )
  }
  const renderUserByClientId = () => {
    return (
      <React.Fragment>
        <Grid>
          <UsersPage
            userInfoByClientId={userInfoByClientId}
            selectedClient={selectedClient}
            sendBackToClient={sendBackToClient}
            createNewUser={createNewUser}
          />
        </Grid>
      </React.Fragment>
    )
  }
  if (selectedClient.length === 0) {
    const renderclientInfo = renderClientInfo()
    return renderclientInfo
  } else if (selectedClient && selectedClient.id) {
    const renderUserInfo = renderUserByClientId()
    return renderUserInfo
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    clientInfo: userProfileEntity.getUserProfile(state, ownProps)
      .isGettingClientInfoDone,
    userInfoByClientId: userProfileEntity.getUserProfile(state, ownProps)
      .isGettingUserInfoByClientIdDone,
    createNewClientDone: userProfileEntity.getUserProfile(state, ownProps)
      .isCreatingNewClientDone,
    createNewUserDone: userProfileEntity.getUserProfile(state, ownProps)
      .isCreatingNewUserDone
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserInfo: () => {
      dispatch(getUserMemoInfo.request())
    },
    getClientInfo: () => {
      dispatch(getClientInfo.request())
    },
    getUserMemoInfoByClientId: data => {
      dispatch(getUserMemoInfoByClientId.request(data))
    },
    createNewClient: data => {
      dispatch(createNewClient.request(data))
    },
    createNewUser: data => {
      dispatch(createNewUser.request(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(MemorangPages)))
