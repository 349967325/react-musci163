import React, { Component } from 'react'

import styles from './header.module.scss'

class DecoraHeader extends Component {
  render () {
    return (
      <div className={`${styles.headerLand}`}>
        <div className={`${styles.title}`}>首页装修</div>
      </div>
    )
  }
}

export default DecoraHeader
