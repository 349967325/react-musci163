import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Button, message } from 'antd'
import ArtistHeaderLine from '../artistHotComposition/artistHeaderLine'
import styles from './index.module.scss'

export default memo(function HotAnchor () {
  const showMessage = () => {
    message.warning({
      top: 200,
      duration: 5,
      maxCount: 1,
      content: '请选择您要下单的商品~~'
    })
  }

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
      <div style={{ textAlign: 'center' }}>
        <Button type='primary' onClick={() => showMessage()}>提示弹窗</Button>
      </div>
    </div>
  )
})
