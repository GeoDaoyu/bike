import React from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'

class FormLogin extends React.Component {
  submit = () => {
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((error, values) => {
      if (!error) {
        message.success(`${userInfo.username}的密码为${userInfo.password}`)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card title="行内表单">
          <Form layout="inline">
            <Form.Item>
              <Input
                placeholder="账号"
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="水平表单">
          <Form layout="horizontal">
            <Form.Item>
              {
                getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: '请输入账号'
                    }
                  ]
                })(<Input
                  placeholder="账号"
                />)
              }
            </Form.Item>
            <Form.Item label="密码">
              {
                getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码'
                    }]
                })(<Input
                  prefix={<Icon type="search"></Icon>}
                  placeholder="密码"
                />)
              }
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.submit}>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormLogin)