import React from 'react';
import { Card, Form, Input } from 'antd'

export default class FormRegister extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Form>
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
          </Form>
        </Card>
      </div>
    )
  }
}
