import React, { Component } from 'react'

import HeaderBar from '../header-bar/index'
import SiteHeader from './site-header'
import MenuNav from './menu-nav'

class GlobalHeader extends Component {
  render() {
    return (
      <div>
        <HeaderBar />

        <SiteHeader />

        <MenuNav />
      </div>
    )
  }
}

export default GlobalHeader
