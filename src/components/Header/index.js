import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import axios from '../../axios/index'

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
    this.getWeather()
  }
  getWeather() {
    const url = 'http://v.juhe.cn/weather/index?cityname=%E6%88%90%E9%83%BD&dtype=&format=&key=b2cf66d157ca387b7b32455ce282427e'
    axios.jsonp({
      url: url
    }).then((response) => {
      if (response.reason === 'successed!') {
        this.setState({
          weather: response.result.today.weather
        })
      } else {
        this.setState({
          weather: ''
        })
      }
    })
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
            <span className="weather-detail">{ this.state.weather }</span>
          </Col>
        </Row>
      </div>
    )
  }
}