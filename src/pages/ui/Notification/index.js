import React from 'react';
import './index.less';
import { Card, Button, notification } from 'antd'

export default class INotification extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  render() {
    const openNotificationWithIcon = type => {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    };
    // 全局的配置
    notification.config({
      placement: 'bottomRight',
      bottom: 50,
      duration: 3,
    });
    return (
      <div>
        <Card title="大小">
          <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
        </Card>
      </div>
    )
  }
}