import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import AppNavbar from '@/components/navBar/index'

import styles from './index.module.scss'

function Discover (props) {
  const { route } = props

  return (
    <div className={`${styles.container}`}>
      <AppNavbar />

      {
        route.routes.map((route, i) => (
          <Route
            key={`discoverRoute-${i}`}
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
    </div>
  )
}

Discover.propTypes = {
  route: PropTypes.object
}

export default memo(Discover)
