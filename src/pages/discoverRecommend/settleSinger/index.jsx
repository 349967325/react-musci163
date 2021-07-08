import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import ArtistHeaderLine from '../artistHotComposition/artistHeaderLine'
import { singerList } from '../mockdata'
import styles from './index.module.scss'

export default memo(function SettleSinger () {
  return (
    <div className={`${styles.settleSinger}`}>
      <ArtistHeaderLine title='入驻歌手' showMore />
      <ul className={`${styles.list}`}>
        {
          singerList.map((item, i) => (
            <li className={`${styles.listItem}`} key={item.id}>
              <Link className={`${styles.listInner} clearfix`}>
                <img className={`${styles.mediaPic}`} src={item.imageUrl} />
                <div className={`${styles.mediaBody}`}>
                  <h4>{item.name}</h4>
                  <p>{item.tag}</p>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
})
