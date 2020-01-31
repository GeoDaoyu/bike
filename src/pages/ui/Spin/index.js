import React from 'react';
import './index.less';
import { Card, Spin, Icon, Alert } from 'antd'

export default class ISpin extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  render() {
    const icon = <Icon type="loading" style={{fontSize: 24}}></Icon>
    const icon2 = <Icon type="smile" spin style={{fontSize: 24}}/>
    return (
      <div>
        <Card title="大小">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Card>
        <Card title="图标">
          <Spin indicator={ icon }/>
          <Spin indicator={ icon2 }/>
        </Card>
        <Card title="图标">
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        </Card>
      </div>
    )
  }
}