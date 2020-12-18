import React, { useRef, useState } from 'react'
import useParabola from '@/components/hooks/parabola'

import styles from './commodity.module.scss'

/*
 * @Description: 购物车动画-demo
 */
export default React.forwardRef(() => {
  const [num, setNum] = useState(1)

  const _startRef = useRef()
  const _endRef = useRef()
  const _res = useParabola(
    {
      startRef: _startRef,
      endRef: _endRef,
      flyOuterStyle: {
        width: '40px',
        height: '40px',
        transition: 'transform 3s',
        margin: ' -40px 0 0 -40px',
      },
      flyInnerStyle: {
        color: '#FF0000',
        transition: 'transform 3s',
        lineHeight: '40px',
      },
      runTime: 3000,
      beforeRun: () => {
        console.log('开始qifei啦~~')
      },
      afterRun: () => {
        console.log('运动结束啦~~')
      },
    },
    <span>12</span>,
  )

  function startRunning() {
    if (num % 4 === 3) {
      _res.running(1)
    }
    setNum(num + 1)
  }

  return (
    <div className={`${styles.pageContainer}`}>
      <div className={styles.center}>
        <div ref={_startRef}>
          <a className={`${styles.btn}`} onClick={startRunning}>
            添加
          </a>
        </div>
      </div>

      <div className={styles.toolBar}>
        <a className={`${styles.toolItem}`}>
          <div />
          <div>
            个人中心
          </div>
        </a>
        <a className={`${styles.toolItem}`}>
          <div>
            我的收藏
          </div>
        </a>
        <a className={`${styles.toolItem}`}>
          <div>
            售后服务
          </div>
        </a>
        <a className={`${styles.toolItem}`}>
          <div ref={_endRef}>
            购物车
          </div>
        </a>
      </div>
    </div>
  )
})
