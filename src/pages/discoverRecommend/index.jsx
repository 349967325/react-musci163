import React, { memo } from 'react'

import TopBanner from './topBanner/index'
import HotRecommend from './hotRecommend/index'

import styles from './index.module.scss'

export default memo(function DiscoverRecommend (props) {
  return (
    <div style={{ minHeight: 'calc(100vh - 275px)' }}>
      <TopBanner />

      <div className={`${styles.container}`}>
        <div className={`${styles.recommendLeft}`}>
          <HotRecommend />
        </div>

        <div className={`${styles.recommendRight}`}>
          右侧
        </div>
      </div>
    </div>
  )
})
