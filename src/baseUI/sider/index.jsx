/*
 * @Author: your name
 * @Date: 2022-01-13 16:17:51
 * @LastEditTime: 2022-02-21 16:19:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\components\sider-com\idnex.js
 */
import React, { Component } from 'react'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import {  NavLink  } from 'react-router-dom'
import menuList from './data'
const { SubMenu } = Menu;

export default class Sider extends Component {
  state = {
    menuList
  }
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    let { menuList } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        {
          menuList.map(item => {
            return (
              item?.children.length === 0 ? (
                <Menu.Item key="1" icon={<MailOutlined />} key={item.id} >
                  <NavLink to={item.pathname}>{item.title}</NavLink>
                </Menu.Item>
              ) : (
                <SubMenu  icon={<MailOutlined />} key={item.id} title={item.title}>
                  {
                    item?.children.map(children => {
                      return (
                        <Menu.Item key={children.id}>
                          <NavLink to={children.pathname}>{children.title}</NavLink>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              ) 
             
            )

          })
        }
      </Menu>
    );
  }
}