import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'

import styles from './index.module.scss'

const tags = [
  { id: 1, name: '华语' },
  { id: 2, name: '流行' },
  { id: 3, name: '摇滚' },
  { id: 4, name: '民谣' },
  { id: 5, name: '电子' }
]

export default memo(function ThemeHeaderRcm (props) {
  return (
    <div className={`${styles.themeHeader}`}>
      <div className={`${styles.themeheaderThumb}`} />
      <div className={`${styles.themeheaderContent}`}>
        <Link className={`${styles.title}`}>热门推荐</Link>
        <div className={`${styles.tab}`}>
          {
            tags.map((item, i) => (
              <React.Fragment key={`tagitem-${item.id}`}>
                <Link>{item.name}</Link>
                {i < tags.length - 1 ? <Divider type='vertical' /> : null}
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <Link className={`${styles.themeheaderMore}`}>
        <span>更多</span>
        <span className={`${styles.arrowRight}`} />
      </Link>
    </div>
  )
})
