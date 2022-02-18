/*
 * @Author: your name
 * @Date: 2022-01-13 16:17:51
 * @LastEditTime: 2022-02-18 10:00:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\components\sider-com\idnex.js
 */
import React, { Component } from 'react'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid'
import {  NavLink  } from 'react-router-dom'
const { SubMenu } = Menu;
export default class Sider extends Component {
  state = {
    menuList: [{
      id: nanoid(),
      title: '应用列表',
      children: [{
        id: nanoid(),
        title: '用户列表',
        pathname:'userManager'
      }, {
        id: nanoid(),
        title: '组织架构',
        pathname:'application'
      }, {
        id: nanoid(),
        title: '文章',
        pathname:'article'
      }]
    }, {
      id: nanoid(),
      title: '学习react',
      children: [{
        id: nanoid(),
        title: 'useEffect ',
        pathname:'useEffect'
      }]
    }]
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
      >
        {
          menuList.map(item => {
            return (
              <SubMenu  icon={<MailOutlined />} key={item.id} title={item.title}>
                {
                  item?.children.length>0?item?.children.map(children => {
                    return (
                      <Menu.Item key={children.id}>
                        <NavLink to={children.pathname+'/2/heading-48'}>{children.title}</NavLink>
                      </Menu.Item>
                    )
                  }):''

                }
              </SubMenu>
            )

          })
        }
      </Menu>
    );
  }
}