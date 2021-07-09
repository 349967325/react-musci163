import React, { memo } from 'react'

import TopBanner from './topBanner/index'
import HotRecommend from './hotRecommend/index'
import NewAlbum from './newAlbum/index'
import UserLogin from './userLogin/index'
import SettleSinger from './settleSinger/index' // 入驻歌手
import HotAnchor from './hotAnchor' // 热门主播

import styles from './index.module.scss'

export default memo(function DiscoverRecommend (props) {
  return (
    <div style={{ minHeight: 'calc(100vh - 275px)' }}>
      <TopBanner />

      <div className={`${styles.container}`}>
        <div className={`${styles.recommendLeft}`}>
          <HotRecommend />
          <NewAlbum />
        </div>

        <div className={`${styles.recommendRight}`}>
          <UserLogin />

          <SettleSinger />

          <HotAnchor />
        </div>
      </div>
    </div>
  )
})
