import React, { memo, useEffect, useState } from 'react'
import { Carousel, Icon } from 'antd'

// import Api from '@/common/api/index'
import styles from './index.module.scss'

export default memo(function TopBanner (props) {
  const [banners] = useState([])

  useEffect(() => {
    // getTopBanners()
  }, [])

  // const getTopBanners = async () => {
  //   const res = await Api.getTopBanners({})
  //   if (res.code === 200) {
  //     setBanners(res.banners)
  //   }
  // }

  const handlePrev = () => {
    console.log('上一页')
  }

  const handleNext = () => {
    console.log('下一页')
  }

  return (
    <div className={`${styles.bannerWrap}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.bannerSwiper}`}>
          <Carousel autoplay effect='fade' autoplaySpeed={5000} style={{ height: '285px', overflow: 'hidden' }}>
            {
              banners.map((item, i) => (
                <img key={`bannerImage-${i}`} className={`${styles.pic}`} src={item.imageUrl} />
              ))
            }
          </Carousel>
        </div>

        <div className={`${styles.download}`}>
          <a className={`${styles.downloadBtn}`} />
        </div>

        <a className={`${styles.bannerBtn} ${styles.btnPrev}`} onClick={() => handlePrev()}>
          <Icon type='left' style={{ fontSize: '28px', color: 'rgb(255, 255, 255)' }} />
        </a>
        <a className={`${styles.bannerBtn} ${styles.btnNext}`} onClick={() => handleNext()}>
          <Icon type='right' style={{ fontSize: '28px', color: 'rgb(255, 255, 255)' }} />
        </a>
      </div>
    </div>
  )
})
