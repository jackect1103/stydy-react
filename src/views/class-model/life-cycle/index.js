/*
 * @Author: your name
 * @Date: 2022-01-13 15:54:58
 * @LastEditTime: 2022-02-18 14:30:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\application\index.js
 */
import React, { Component } from 'react'
export default class LifeCycle extends Component {
  
  state = {
    list: []
  }
  componentDidMount() {
    console.log('componentDidMount-生命周期')
  }


  render() {


    return (
      <div>componentDidMount-生命周期</div>
    )
  }
}