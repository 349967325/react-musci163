import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import ThemeHeaderRcm from '@/components/themeheaderRcm/index'
import { recommendTags, recommendList } from '../mockdata'

import styles from './index.module.scss'

export default memo(function HotRecommend (props) {
  return (
    <div>
      <ThemeHeaderRcm title='热门推荐' keywords={recommendTags} right='更多' showIcon />
      <ul className={`${styles.recommendList} clearfix`}>
        {
          recommendList.map((item, i) => (
            <li key={`${item.id}-${i}`}>
              <div className={`${styles.cover}`}>
                <img src={item.imageUrl} />
                <Link className={`${styles.mask} ${styles.spriteCover}`} title={item.desc} />
                <div className={`${styles.bottomBar} ${styles.spriteCover}`}>
                  <span><i className={`${styles.spriteIcon} ${styles.listenIcon}`} />{item.num}</span>
                  <i className={`${styles.spriteIcon} ${styles.playIcon}`} />
                </div>
              </div>
              <p className={`${styles.desc}`}>
                <Link title={item.desc}>{item.desc}</Link>
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
})
