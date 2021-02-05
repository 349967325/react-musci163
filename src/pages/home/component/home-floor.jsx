/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './homefloor.module.scss'

class HomeFloor extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  state = {

  }

  render () {
    const { data = {} } = this.props

    return (
      <div className='w1200'>
        <div className={`${styles.floorHd}`}>
          <h3 className={`${styles.title}`}>{data.title}</h3>
        </div>

        <div className={`${styles.floorBd}`}>
          {
            data.list && data.list.length > 0
              ? <ul className={`${styles.brickList} clearfix`}>
                {
                  data.list.map((item, i) => (
                    <li className={`${styles.brickItem} ${i}`} key={`brick-${data.id}-${i}`}>
                      <div className={`${styles.imgBox}`}>
                        <img className={`${styles.pic}`} src={item.imageUrl} />
                      </div>
                      <div className={`${styles.name}`}>
                        {item.name}
                      </div>
                      <p className={`${styles.price}`}>
                        ￥{(+item.price * 100 / 100).toFixed(2)}
                      </p>
                    </li>
                  ))
                }
              </ul>
              : null
          }
        </div>
      </div>
    )
  }
}

export default HomeFloor
