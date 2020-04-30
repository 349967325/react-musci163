import React, { Component } from 'react'

import styles from './headerbar.module.scss'

class HeaderBar extends Component {
  static propTypes = {}

  state = {}

  render() {
    return (
      <div className={`${styles.headerBar}`}>
        <div className={`${styles.barContainer} clearfix`}>
          <div className={`${styles.barNav}`}></div>

          <div className={`${styles.barUser}`}>

          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar