import React, { Component } from 'react'

import FirstScreen from './component/first-screen'
import HomeFloor from './component/home-floor'
import HomeBox from './component/home-box'

import MockData from './mock.json'

import styles from './home.module.scss'

class Home extends Component {
  static propTypes = {}
  state = {
    data: []
  }

  componentDidMount () {
    this.setState({
      data: MockData
    })
  }

  render () {
    const { data = [] } = this.state

    return (
      <div>
        <div>
          <FirstScreen />
        </div>
        <div className={`${styles.homeMain}`}>
          {
            data.map((floor, i) => (
              <div key={`floor-${floor.id}`}>
                {
                  floor.type === 'floor'
                    ? <HomeFloor data={floor} />
                    : null
                }

                {
                  floor.type === 'advert'
                    ? <HomeBox data={floor} />
                    : null
                }
              </div>
            ))
          }
        </div>

      </div>
    )
  }
}

export default Home
