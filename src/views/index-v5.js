/*
 * @Author: your name
 * @Date: 2022-01-13 16:14:36
 * @LastEditTime: 2022-02-18 13:27:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\index.js
 */
import React, { Component } from 'react'
import { Route,Routes } from 'react-router-dom'
import Sider from '../baseUI/sider/index'
import routes from './react-router/version-5/reactRouterConfig'

import Application from './class-model/application/index'
import UserManager from './class-model/application/index'

import './index.css'
console.log('routes', routes)
export default class Home extends Component {
  render() {
    return (
      <div className='Main'>
        <Sider />
        <Routes>
          {/* 
             路由版本问题：
             https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element
          */}
          <Route path="/application" element={<Application name='Application'/>}></Route>
          <Route path="/userManager" element={<UserManager  name='UserManager'/>}></Route>
        </Routes>
      </div>
    )
  }
}