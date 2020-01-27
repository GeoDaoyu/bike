import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

export default class Header extends React.Component {
  
  componentWillMount() {
    this.setState({
      userName: '管理员'
    })
    setInterval(() => {
      const time = new Date().toLocaleString();
      this.setState({
        time
      })
    }, 1000);
  }
  render() {
    return (
      <div>
        <Row className="header">
          <Col span={24} className="header-top">
            <span>欢迎，{ this.state.userName }</span>
            <a href="a">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{ this.state.time }</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}