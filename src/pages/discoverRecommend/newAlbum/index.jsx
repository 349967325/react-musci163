import React, { memo } from 'react'

import ThemeHeaderRcm from '@/components/themeheaderRcm/index'

import styles from './index.module.scss'

export default memo(function NewAlbum (props) {
  return (
    <div>
      <ThemeHeaderRcm title='新碟上架' right='更多' showIcon />
      <div className={`${styles.content}`}>
        <div className={`${styles.inner}`}>
          新碟上架轮播图
        </div>
      </div>
    </div>
  )
})
