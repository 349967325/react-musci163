
import React, { Component, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Skeleton } from 'antd'
import GlobalHeader from './components/globalHeader/index'
import GlobalFooter from './components/globalFooter/index'

import { connect } from 'react-redux'
import routes from './routes/index.js'

class App extends Component {
  static propTypes = {
    // token: Proptypes.string
  }

  state = {}

  componentDidMount () {}

  render () {
    return (
      <Router>
        <GlobalHeader />
        <Suspense fallback={<Skeleton active />}>
          <Switch>
            {
              routes.map((route, i) => (
                <Route
                  key={`route-${i}`}
                  path={route.path}
                  exact={route.exact}
                  strict={route.strict}
                  render={props => (
                    route.render
                      ? route.render({ ...props, route: route })
                      : <route.component {...props} route={route} />
                  )}
                />
              ))
            }
          </Switch>
        </Suspense>
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
