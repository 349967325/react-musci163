import React, { memo } from 'react'

import TopBanner from './components/topBanner/index'
import HotRecommend from './components/hotRecommend/index'
import NewAlbum from './components/newAlbum/index'
import UserLogin from './components/userLogin/index'
import SettleSinger from './components/settleSinger/index' // 入驻歌手
import HotAnchor from './components/hotAnchor' // 热门主播

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
