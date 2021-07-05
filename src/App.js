
import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { Skeleton } from 'antd'
import GlobalHeader from './components/globalHeader/index'
import GlobalFooter from './components/globalFooter/index'

import renderRoutes from './common/utils/renderRoutes'

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
          {renderRoutes(routes)}
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
