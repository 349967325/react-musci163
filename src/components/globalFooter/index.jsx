import React, { memo } from 'react'
import { Divider } from 'antd'
import { footerLinks } from '@/common/localdatas/localdatas'

import styles from './index.module.scss'

export default memo(function GlobalFooter (props) {
  return (
    <div className={`${styles.footerBar}`}>
      <div className={`${styles.footerContainer} clearfix`}>
        <div className={`${styles.copy}`}>
          <div className={`${styles.linksLand}`}>
            {
              footerLinks.map((item, i) => (
                <React.Fragment key={`footerLinks-${i}`}>
                  <a
                    href={item.link} rel='noopener noreferrer' target='_blank'
                    className={`${styles.linkItem}`}
                  >
                    {item.title}
                  </a>
                  {
                    i < footerLinks.length - 1
                      ? <Divider type='vertical' style={{ backgroundColor: 'rgb(153, 153, 153)' }} />
                      : null
                  }
                </React.Fragment>
              ))
            }
          </div>

          <p className={`${styles.copyItem}`}>
            <span className={`${styles.itemSpan}`}>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
          </p>

          <p className={`${styles.copyItem}`}>
            <span className={`${styles.itemSpan}`}>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：ncm5990@163.com</span>
          </p>

          <p className={`${styles.copyItem}`}>
            <span className={`${styles.itemSpan}`}>粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</span>
            <span>浙公网安备 33010902002564号</span>
          </p>
        </div>
      </div>
    </div>
  )
})
