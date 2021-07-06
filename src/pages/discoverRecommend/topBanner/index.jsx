import React, { memo } from 'react'
import { Carousel, Icon } from 'antd'

import styles from './index.module.scss'

const banners = [
  { id: 1, imageUrl: 'https://img2.baidu.com/it/u=774373677,2313985244&fm=26&fmt=auto&gp=0.jpg' },
  { id: 2, imageUrl: 'https://img2.baidu.com/it/u=3206640074,3081930721&fm=26&fmt=auto&gp=0.jpg' },
  { id: 3, imageUrl: 'https://img0.baidu.com/it/u=3545834692,4156954932&fm=26&fmt=auto&gp=0.jpg' },
  { id: 4, imageUrl: 'https://img0.baidu.com/it/u=3930510857,1870350260&fm=26&fmt=auto&gp=0.jpg' },
  { id: 5, imageUrl: 'https://img1.baidu.com/it/u=1650808851,593598514&fm=26&fmt=auto&gp=0.jpg' }
]

export default memo(function TopBanner (props) {
  return (
    <div className={`${styles.bannerWrap}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.bannerSwiper}`}>
          <Carousel autoplay>
            {
              banners.map((item, i) => (
                <div key={`banner-${item.id}`} className={`${styles.imgBox}`}>
                  <img className={`${styles.pic}`} src={item.imageUrl} />
                </div>
              ))
            }
          </Carousel>
        </div>

        <div className={`${styles.download}`}>
          <a className={`${styles.downloadBtn}`} />
        </div>

        <a className={`${styles.bannerBtn} ${styles.btnPrev}`} onClick={() => this.handlePrev()}>
          <Icon type='left' style={{ fontSize: '28px', color: 'rgb(255, 255, 255)' }} />
        </a>
        <a className={`${styles.bannerBtn} ${styles.btnNext}`} onClick={() => this.handleNext()}>
          <Icon type='right' style={{ fontSize: '28px', color: 'rgb(255, 255, 255)' }} />
        </a>
      </div>
    </div>
  )
})
