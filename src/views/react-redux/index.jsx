/*
 * @Author: your name
 * @Date: 2022-02-18 15:50:54
 * @LastEditTime: 2022-02-18 15:50:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-redux\index.jsx
 */
import React, { PureComponent } from "react"
import HOME from './components/home'
import ABOUT from './components/about'
class ReactRedux extends PureComponent{
  render(){
    return (
      <div>
        <HOME></HOME>
        <ABOUT></ABOUT>
      </div>
    )
  }
}
export default ReactRedux