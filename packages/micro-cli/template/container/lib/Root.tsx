import React, { FC, Component } from 'react'
import { IDemoRootProps } from './core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { List, Edit } from './components'
import { useStore } from './core'


const Root: FC<IDemoRootProps> = (props) => {
  
  const { updateStore } = useStore()

  updateStore(props)
  
  return (
    <Router basename={props.rootPath}>
      <Switch>
        <Route path={'/edit/:id'} component={Edit} />
        <Route path="/" component={List} />
      </Switch>
    </Router>
  )
}

export class RootComponent extends Component<IDemoRootProps> {

  render () { return <Root {...this.props} /> }
  // single-spa warn: rootComponent should implement componentDidCatch to avoid
  // accidentally unmounting the entire single-spa application.
  componentDidCatch () {

  }
}