import React from 'react';
import './index.less';
import { Card, Button } from 'antd'

export default class Btn extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className="btn">
        <Card title="基础按钮" className="btn-wrap">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </Card>
        <Card title="loading按钮" className="btn-wrap">
          <Button type="primary" loading={this.state.loading} onClick={() => {
            this.setState({
              loading: true
            })
          }}>确定</Button>
          <Button onClick={() => {
            this.setState({
              loading: false
            })
          }}>取消</Button>
        </Card>
      </div>
    )
  }
}