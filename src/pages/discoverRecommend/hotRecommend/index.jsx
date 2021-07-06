import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import ThemeHeaderRcm from '@/components/themeheaderRcm/index'

import styles from './index.module.scss'

const list = [
  {
    id: 5159439062,
    imageUrl: 'http://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg?param=140y140',
    desc: '留给我们的夏天，大概还有一首歌那么长',
    num: '770万'
  },
  {
    id: 5159439062,
    imageUrl: 'http://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg?param=140y140',
    desc: '留给我们的夏天，大概还有一首歌那么长',
    num: '770万'
  },
  {
    id: 5159439062,
    imageUrl: 'http://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg?param=140y140',
    desc: '留给我们的夏天，大概还有一首歌那么长',
    num: '770万'
  },
  {
    id: 5159439062,
    imageUrl: 'http://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg?param=140y140',
    desc: '留给我们的夏天，大概还有一首歌那么长',
    num: '770万'
  },
  {
    id: 5159439062,
    imageUrl: 'http://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg?param=140y140',
    desc: '留给我们的夏天，大概还有一首歌那么长',
    num: '770万'
  },
  {
    id: 5159439062,
    imageUrl: 'http://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg?param=140y140',
    desc: '留给我们的夏天，大概还有一首歌那么长',
    num: '770万'
  }
]

export default memo(function HotRecommend (props) {
  return (
    <div>
      <ThemeHeaderRcm title='热门推荐' />
      <ul className={`${styles.recommendList} clearfix`}>
        {
          list.map((item, i) => (
            <li key={`${item.id}-${i}`}>
              <div className={`${styles.cover}`}>
                <img src={item.imageUrl} />
                <Link className={`${styles.mask}`} />
                <div className={`${styles.bottom}`} />
              </div>
              <p className={`${styles.desc}`}>
                <Link>{item.desc}</Link>
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
})
