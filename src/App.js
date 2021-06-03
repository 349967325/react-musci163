
import React, { Component } from 'react'
import Proptypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'
import { routerMap } from './routes/index.js'

import PageLoading from '@/components/pageLoading/index'
// import GlobalHeader from './components/global-header/index'
// import GlobalFooter from './components/global-footer/index'

import './App.css'
import './assets/fonts/iconfont.css'

class App extends Component {
  static propTypes = {
    token: Proptypes.string,
    loading: Proptypes.bool
  }

  state = {}

  componentDidMount () {}

  render () {
    const { token, loading = false } = this.props

    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route
              exact path='/'
              render={props => {
                return <Redirect to='/home' />
              }}
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
        </Router>

        {
          loading
            ? <PageLoading />
            : null
        }
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App)
