import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ScrollToTop from '../components/common/ScrollTop'
import { commonRoutes } from './commonRoutes'

const RoutesHOC = props => {
  const { routes } = props
  return (
    <React.Fragment>
      {routes.map((route, index) => {
        return <Route key={index} {...route} />
      })}
    </React.Fragment>
  )
}

const createOpenRoutes = () => {
  return <RoutesHOC routes={commonRoutes} />
}

export const Routes = props => {
  return (
    <Switch>
      <ScrollToTop>{createOpenRoutes()}</ScrollToTop>
    </Switch>
  )
}
