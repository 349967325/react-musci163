
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'
import { routerMap } from './routes/index.js'

import GlobalHeader from './components/global-header/index'
import GlobalFooter from './components/global-footer/index'

import './App.css'
import './assets/fonts/iconfont.css'

class App extends Component {
  static propTypes = {

  }

  state = {}

  componentDidMount () {}

  render () {
    return (
      <div className='App'>
        <Router>
          <GlobalHeader />
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
                render={props => (<route.component {...props} />)}
              />
            ))}
          </Switch>

          <GlobalFooter />
        </Router>
      </div>

    )
  }
}

export default connect()(App)
