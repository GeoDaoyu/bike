import React from 'react';
import './index.less'
import logo from '../../logo.svg';
import MenuConfig from '../../config/menu';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default class Nav extends React.Component {
  componentWillMount() {
    const menuTree = this.renderMenu(MenuConfig)
    this.setState({
      menuTree
    })
  }
  renderMenu = (menuConfig) => {
    return menuConfig.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>{item.title}
        </Menu.Item>
      )
    });
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <h1>单车管理</h1>
        </div>
        <Menu mode="vertical">
          {this.state.menuTree}
        </Menu>
      </div>
    )
  }
}