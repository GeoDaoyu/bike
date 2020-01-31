import React from 'react';
import './index.less';
import { Card, Button, Modal } from 'antd'

export default class IModal extends React.Component {
  constructor() {
    super()
    this.state = {
      visible1: false,
      visible2: false,
      visible3: false,
      param: ''
    }
  }
  // 箭头函数的写法
  showModal1 = () => {
    this.setState({
      visible1: true
    })
  }
  // bind this的写法
  showModal2() {
    this.setState({
      visible2: true
    })
  }
  // 需要传参时的写法
  showModal3 = (param) => {
    this.setState({
      visible3: true,
      param: param
    })
  }
  
  handleOk = e => {
    this.setState({
      visible1: false,
      visible2: false,
      visible3: false,
      param: ''
    });
  };
  // 配合传参 使用变量控制多个type, 使用[]设置属性，而不使用switch，更简洁
  handleCancel = (type, e) => {
    this.setState({
      [type]: false
    });
  };
  render() {
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.showModal1}>
            Modal1
          </Button>
          <Button type="primary" onClick={this.showModal2.bind(this)}>
            Modal2
          </Button>
          <Button type="primary" onClick={() => this.showModal3('param')}>
            Modal3
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible1}
            onOk={this.handleOk}
            onCancel={(e) => this.handleCancel('visible1', e)}
          >
            <p>modal-1</p>
          </Modal>
          <Modal
            title="Basic Modal"
            visible={this.state.visible2}
            onOk={this.handleOk}
            onCancel={(e) => this.handleCancel('visible2', e)}
          >
            <p>modal-2</p>
          </Modal>
          <Modal
            title="Basic Modal"
            visible={this.state.visible3}
            onOk={this.handleOk}
            onCancel={(e) => this.handleCancel('visible3', e)}
          >
            <p>modal-3</p>
            <p>{this.state.param}</p>
          </Modal>
        </Card>
      </div>
    )
  }
}