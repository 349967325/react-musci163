import React, { Component } from 'react'

import HeaderBar from '../header-bar/index'
import SiteHeader from './site-header'

class GlobalHeader extends Component {
  render() {
    return (
      <div>
        <HeaderBar />

        <SiteHeader />
      </div>
    );
  }
}

export default GlobalHeader
