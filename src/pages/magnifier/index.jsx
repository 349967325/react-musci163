import React, { Component } from 'react'

import pic01 from '@/assets/images/product_01.jpg'
import bigpic from '@/assets/images/product_big_01.jpg'

import styles from './index.module.scss'

class Magnifier extends Component {
  static propTypes = {}
  state = {
    show: false,
    top: 0,
    left: 0
  }

  smallbox = null
  magnifier = null
  bigimg = null

  // 鼠标移入
  handleMouseEnter = () => {
    this.setState({
      show: true
    })
  }

  // 鼠标移出
  handleMouseLeave = () => {
    this.setState({
      show: false
    })
  }

  // 鼠标移动
  handleMouseMove = (event) => {
    let pinX = event.clientX - this.smallbox.offsetParent.offsetLeft - this.magnifier.offsetWidth / 2
    let pinY = event.clientY - this.smallbox.offsetParent.offsetTop - this.magnifier.offsetHeight / 2

    if (pinX < 0) {
      pinX = 0
    }

    if (pinX >= this.smallbox.offsetWidth - this.magnifier.offsetWidth) {
      pinX = this.smallbox.offsetWidth - this.magnifier.offsetWidth
    }

    if (pinY < 0) {
      pinY = 0
    }

    if (pinY >= this.smallbox.offsetHeight - this.magnifier.offsetHeight) {
      pinY = this.smallbox.offsetHeight - this.magnifier.offsetHeight
    }

    this.setState({
      left: pinX,
      top: pinY,
      zoomLeft: -pinX / (this.smallbox.offsetWidth / this.bigimg.offsetWidth),
      zoomTop: -pinY / (this.smallbox.offsetHeight / this.bigimg.offsetHeight)
    })
  }

  render () {
    const { show = false, left = 0, top = 0, zoomLeft = 0, zoomTop = 0 } = this.state
    console.log('zoomLeft===', zoomLeft)
    console.log('zoomTop===', zoomTop)

    return (
      <div className={`${styles.pageWrap}`}>
        <h3 className={`${styles.title}`}>图片放大镜效果</h3>
        <div className={`${styles.preview}`}>
          <div
            ref={el => { this.smallbox = el }} className={`${styles.imgBox}`}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onMouseMove={this.handleMouseMove}
          >
            <img className={`${styles.pic}`} src={pic01} />

            <div
              className={`${styles.magnifier} ${!show ? styles.none : ''}`}
              ref={(el) => { this.magnifier = el }}
              style={{ left: `${left}px`, top: `${top}px` }}
            />
          </div>

          <div className={`${styles.zoomBox} ${!show ? styles.none : ''}`}>
            <img
              ref={(el) => { this.bigimg = el }}
              className={`${styles.zoompic}`}
              style={{ position: 'absolute', left: `${zoomLeft}px`, top: `${zoomTop}px` }}
              src={bigpic}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Magnifier
