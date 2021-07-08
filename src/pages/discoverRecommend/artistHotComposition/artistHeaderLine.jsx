import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

function ArtistHeaderLine (props) {
  const { title, showMore } = props

  return (
    <h3 className={`${styles.artistHeaderLine}`}>
      <span className={`${styles.title}`}>{title}</span>
      {
        showMore
          ? <a className={`${styles.more}`}>查看更多&nbsp;&gt;</a>
          : null
      }

    </h3>
  )
}

ArtistHeaderLine.propTypes = {
  title: PropTypes.string.isRequired,
  showMore: PropTypes.bool
}

ArtistHeaderLine.defaultProps = {
  showMore: false
}

export default memo(ArtistHeaderLine)
