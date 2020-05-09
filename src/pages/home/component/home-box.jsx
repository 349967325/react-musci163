import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './homefloor.module.scss'

class HomeBox extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  state = {}

  render() {
    const { data = {} } = this.props

    return (
      <div className={`w1200 ${styles.homeBox}`}>
        <img
          className={`${styles.boxImg}`}
          src={data.imageUrl}
        />
      </div>
    )
  }
}

export default HomeBox
