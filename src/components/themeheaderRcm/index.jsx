import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'

import styles from './index.module.scss'

function ThemeHeaderRcm (props) {
  const { title, keywords = [], right = '更多', showIcon = true } = props

  return (
    <div className={`${styles.themeHeader}`}>
      <div className={`${styles.themeheaderThumb}`} />
      <div className={`${styles.themeheaderContent}`}>
        <Link className={`${styles.title}`}>{title}</Link>
        <div className={`${styles.tab}`}>
          {
            keywords.map((item, i) => (
              <React.Fragment key={`tagitem-${item.id}`}>
                <Link>{item.name}</Link>
                {i < keywords.length - 1 ? <Divider type='vertical' /> : null}
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <Link className={`${styles.themeheaderMore}`}>
        <span>{right}</span>
        {showIcon ? <span className={`${styles.arrowRight}`} /> : null}
      </Link>
    </div>
  )
}

ThemeHeaderRcm.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  showIcon: PropTypes.bool,
  right: PropTypes.string
}

ThemeHeaderRcm.defaultProps = {
  keywords: [],
  showIcon: true,
  right: '更多'
}

export default memo(ThemeHeaderRcm)
