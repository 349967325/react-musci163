import React, { Component } from 'react'

import ProductGrid from './productGrid'

import styles from './commodity.module.scss'

class Commidity extends Component {
  static propTypes = {

  }

  state = {
    tableData: []
  }

  componentDidMount () {
    const arr = []
    for (let i = 0; i < 30; i++) {
      arr.push({
        id: 10000 + i,
        name: `小米电视4S 75英寸超大屏 4K超高清蓝牙语音遥控 人工智能语音网络液晶平板教育电视---${i + 1}`,
        price: 4499,
        imageUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3268885169,927448342&fm=26&gp=0.jpg'
      })
    }

    this.setState({
      tableData: arr
    })
  }

  render () {
    const { tableData = [] } = this.state

    return (
      <div className={`${styles.pageContainer}`}>
        <ProductGrid {...this.props} list={tableData} />
      </div>
    )
  }
}

export default Commidity
