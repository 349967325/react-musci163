import React, { Component } from 'react'
import { Row, Tree, Card, Input } from 'antd'

const { Search } = Input

class CommodityDetail extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {

  }

  render () {
    return (
      <div style={{ fontSize: '14px', color: '#333333', textAlign: 'center' }}>
        <Card>
          <Row style={{ marginBottom: '24px' }}>
            <Search />
          </Row>
          <Row>
            <Tree />
          </Row>
        </Card>

      </div>
    )
  }
}

export default CommodityDetail
