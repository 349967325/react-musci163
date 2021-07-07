import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

export default memo(function HotAnchor () {
  return (
    <div className={`${styles.settleSinger}`}>
      <h3><span>热门主播</span><a>查看全部</a></h3>
      <ul>
        <li className={`${styles.listItem}`}>
          <Link className={`${styles.listInner}`}>
            <img className={`${styles.mediaPic}`} />
            <div className={`${styles.mediaBody}`}>
              <h4 />
              <p />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
})
