import React, { Component } from 'react'

import Swiper from 'swiper/js/swiper.min.js'

import 'swiper/css/swiper.min.css'
import styles from './firstscreen.module.scss'

import banner1 from '@/assets/images/banner/banner_1200_1.jpg'
import banner2 from '@/assets/images/banner/banner_1200_2.jpg'
import banner3 from '@/assets/images/banner/banner_1200_3.jpg'
import banner4 from '@/assets/images/banner/banner_1200_4.jpg'
import banner5 from '@/assets/images/banner/banner_1200_5.jpg'

class FirstScreen extends Component {
  static propTypes = {}
  state = {
    bannerList: [
      { imageUrl: banner1 },
      { imageUrl: banner2 },
      { imageUrl: banner3 },
      { imageUrl: banner4 },
      { imageUrl: banner5 }
    ]
  }

  componentDidMount () {
    this.initBannerSwiper()
  }

  // 初始化banner 轮播图
  initBannerSwiper = () => {
    /* eslint-disable */
    let swiper = new Swiper(this.refs.homeBanner, {
      mousewheel: false,
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 3500
      },
      effect : 'fade',
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    /* eslint-enable */
  }

  render() {
    const { bannerList = [] } = this.state

    return (
      <div className={`${styles.firstScreen}`}>
        <div className='w1200'>
          <div className='swiper-container' ref='homeBanner'>
            <div className='swiper-wrapper'>
              {
                bannerList.map((bitem, i) => (
                  <div className='swiper-slide' key={`homeBanner-${i}`}>
                    <img src={bitem.imageUrl} />
                  </div>
                ))
              }
            </div>

            <div className='swiper-button-next' />
            <div className='swiper-button-prev' />
          </div>
        </div>
      </div>
    )
  }
}

export default FirstScreen
