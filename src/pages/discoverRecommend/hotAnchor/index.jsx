import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import ArtistHeaderLine from '../artistHotComposition/artistHeaderLine'
import styles from './index.module.scss'

export default memo(function HotAnchor () {
  return (
    <div className={`${styles.settleSinger}`}>
      <ArtistHeaderLine title='热门主播' />
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
