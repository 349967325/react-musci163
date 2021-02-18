import React, { Component } from 'react'

import Api from '@/common/api/index'

class CommodityDetail extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {
    const status = 110
    if ([0, 10, 100, 105, 110, 1000].includes(+status)) {
      console.log('执行===')
    } else {
      console.log('不存在===')
    }

    this.getCommodityDetail()
  }

  getCommodityDetail = () => {
    Api.getCommodityDetail({ commoditySkuId: 56276 }).then(res => {
      const { code, data } = res
      if (+code === 10000) {
        console.log(data)
      }
    })
  }

  render () {
    return (
      <div style={{ fontSize: '14px', color: '#333333', textAlign: 'center' }}>
        这是详情页
      </div>
    )
  }
}

export default CommodityDetail
