import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Card, Form, Input, Button } from 'antd'
import $lodash from 'lodash'

const FormItem = Form.Item

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = $lodash.debounce(this.handleSubmit, 300)
  }

  static propTypes = {
    form: PropTypes.object
  }

  state = {}

  componentDidMount () {}

  // 点击登录
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <div style={{ fontSize: '14px', color: '#333333' }}>
        <Card>
          <Row style={{ width: '500px', margin: '0px auto' }}>
            <Form>
              <Row>
                <FormItem label='登录名'>
                  {
                    getFieldDecorator('loginName', {

                    })(
                      <Input placeholder='请输入...' autoComplete='off' />
                    )
                  }
                </FormItem>
              </Row>
              <Row>
                <FormItem label='登录密码'>
                  {
                    getFieldDecorator('password', {

                    })(
                      <Input placeholder='请输入...' autoComplete='off' />
                    )
                  }
                </FormItem>
              </Row>
              <Row>
                <Button type='primary' onClick={() => this.handleSubmit()}>登录</Button>
              </Row>
            </Form>
          </Row>
        </Card>
      </div>
    )
  }
}

const Login = Form.create()(LoginForm)

export default Login
