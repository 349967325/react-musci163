
import React, { Component } from 'react'
import Proptypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import GlobalHeader from './components/globalHeader/index'
import GlobalFooter from './components/globalFooter/index'

import { connect } from 'react-redux'
import { routerMap } from './routes/index.js'

class App extends Component {
  static propTypes = {
    token: Proptypes.string
  }

  state = {}

  componentDidMount () {}

  render () {
    const { token = '' } = this.props

    return (
      <Router>
        <GlobalHeader />

        <Switch>
          <Route
            exact path='/'
            render={props => { return <Redirect to='/home' /> }}
          />

          {routerMap.map((route, i) => (
            <Route
              key={i} exact
              name={route.name}
              path={route.path}
              render={props => (
                !route.auth
                  ? <route.component {...props} />
                  : (
                    token && token !== ''
                      ? <route.component {...props} />
                      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                  )
              )}
            />
          ))}
        </Switch>

        <GlobalFooter />
      </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(App)
