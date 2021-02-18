import React, { Component } from 'react'

import Api from '@/common/api/index'

class CommodityDetail extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {
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
