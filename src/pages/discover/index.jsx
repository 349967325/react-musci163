import React, { memo } from 'react'

import AppNavbar from '@/components/navBar/index'

import styles from './index.module.scss'

function Discover (props) {
  return (
    <div className={`${styles.container}`}>
      <AppNavbar />
    </div>
  )
}

export default memo(Discover)
