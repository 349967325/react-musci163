import React, { useRef, useState } from 'react'
import useParabola from '@/components/hooks/parabola'

import styles from './product.module.scss'

/*
 * @Description: 购物车动画-demo
 * @version: 0.0.1
 * @Date: 2020-04-20 23:21:33
 */
export default React.forwardRef(() => {
  const [num, setNum] = useState(1)

  const startRef = useRef()
  const endRef1 = useRef()
  const endRef2 = useRef()
  const endRef3 = useRef()
  const endRef4 = useRef()
  const res1 = useParabola(
    {
      startRef,
      endRef: endRef1,
      flyInnerStyle: {
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.25, 1.3)'
      },
      beforeRun: () => {
        console.log('开始起飞啦~~')
      },
      afterRun: () => {
        console.log('飞行结束啦~~')
      }
    },
    <span>1</span>
  )
  const res2 = useParabola(
    {
      startRef,
      endRef: endRef2,
      flyInnerStyle: {
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.25, 1.3)'
      }
    },
    <span>1</span>
  )
  const res3 = useParabola(
    {
      startRef,
      endRef: endRef3,
      flyOuterStyle: { transition: 'transform 2.5s' },
      flyInnerStyle: { transition: 'transform 2.5s' },
      runTime: 2500
    },
    <span>1</span>
  )
  const res4 = useParabola(
    {
      startRef,
      endRef: endRef4,
      flyInnerStyle: {
        transitionTimingFunction: 'cubic-bezier(.55,0,.85,.36)'
      }
    },
    <span>1</span>
  )

  function startRunning () {
    if (num % 4 === 1) {
      res1.running(1)
    }
    if (num % 4 === 2) {
      res2.running(2)
    }
    if (num % 4 === 3) {
      res3.running(3)
    }
    if (num % 4 === 0) {
      res4.running(4)
    }
    setNum(num + 1)
  }

  return (
    <div className={`${styles.productGrid}`}>
      <div className={styles.center}>
        <div ref={startRef}>
          <a className={`${styles.btn} ${styles.redColor}`} onClick={startRunning}>
            加入购物车
          </a>
        </div>
      </div>

      <div className={styles.toolBar}>
        <a className={`${styles.toolItem}`} ref={endRef1}>
          <div className={`${styles.iconWrap}`}>
            <i className={`iconfont icon-shouye ${styles.icon}`} />
          </div>
          <div>个人中心</div>
        </a>
        <a className={`${styles.toolItem}`} ref={endRef2}>
          <div className={`${styles.iconWrap}`}>
            <i className={`iconfont icon-wodedingdan ${styles.icon}`} />
          </div>
          <div>货架</div>
        </a>
        <a className={`${styles.toolItem}`} ref={endRef3}>
          <div className={`${styles.iconWrap}`}>
            <i className={`iconfont icon-gouwuche ${styles.icon}`} />
          </div>
          <div>购物车</div>
        </a>
        <a className={`${styles.toolItem}`} ref={endRef4}>
          <div className={`${styles.iconWrap}`}>
            <i className={`iconfont icon-jushoucang ${styles.icon}`} />
          </div>
          <div>我的收藏</div>
        </a>
      </div>
    </div>
  )
})
