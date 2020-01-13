import React, { FC, useState } from 'react'
import { IBiReportRootProps, } from './config'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Report } from './report'
import { Query } from './query'
import { Dashboard } from './dashboard/Dashboard'
import { Provider } from './store'

export const Root: FC<IBiReportRootProps> = ({
  rootPath,
  api,
  access
}) => {
  return (
    <Provider store={{ api, rootPath, access }}>
      <Router basename={rootPath}>
        <Route path="/report" exact component={Report} />
        <Route path="/query" exact component={Query} />
        <Route path="/" exact component={Dashboard} />
      </Router>
    </Provider>

  )
}