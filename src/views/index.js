/*
 * @Author: your name
 * @Date: 2022-01-13 16:14:36
 * @LastEditTime: 2022-02-18 15:28:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\index.js
 */
import React, { Component } from 'react'
import { BrowserRouter as Router , useRoutes } from 'react-router-dom'

import Sider from '../baseUI/sider/index'
import Header from '../baseUI/header/index'
import RouteElement from './react-router/version-6/routerConfig'
import './index.css'

function RouteElements() {
  const element = useRoutes(RouteElement)
  return element
}

export default class Home extends Component {
  render() {
    return (
      <div className='Main'>
        <Router>
          <Header/>
          <div className='contant'>
            <Sider />
            {/* 
              路由版本问题：
              https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element
            */}
            <RouteElements/>
          </div>
          
        </Router>
      </div>
    )
  }
}