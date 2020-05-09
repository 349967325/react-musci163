
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'

import GlobalHeader from './componetns/global-header/index'
import { routerMap } from './routes/index.js'

import './App.css'
import './assets/fonts/iconfont.css'

class App extends Component {
  static propTypes = {

  }

  state = {}

  componentDidMount () {}

  render () {
    return (
      <Router>
        <div className='App'>
          <div>
            <GlobalHeader />
          </div>

          <div>
            <Switch>
              <Route
                exact
                path='/'
                render={props => {
                  return <Redirect to='/home' />
                }}
              />

              {routerMap.map((route, i) => (
                <Route
                  name={route.name}
                  exact
                  key={i}
                  path={route.path}
                  render={props => (<route.component {...props} />)}
                />
              ))}
            </Switch>
          </div>

          <div>页面Footer</div>
        </div>
      </Router>
    )
  }
}

export default connect()(App)
