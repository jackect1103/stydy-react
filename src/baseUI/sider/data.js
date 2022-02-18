/*
 * @Author: your name
 * @Date: 2022-02-18 10:12:40
 * @LastEditTime: 2022-02-18 15:41:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEonst 
 * @FilePath: \react-example\src\components\sider-com\data.js
 */
import { nanoid } from 'nanoid'
 
const menuList = [{
  id: nanoid(),
  title: 'react-class模式', 
  children: [{
    id: nanoid(),
    title: '生命周期',
    pathname:'life-cycle'
  }]
}, {
  id: nanoid(),
  title: 'react-hooks模式',
  children: [{
    id: nanoid(),
    title: 'useEffect ',
    pathname:'useEffect'
  }]
}, {
  id: nanoid(),
  title: 'react-router',
  children: [{
    id: nanoid(),
    title: 'react-router-v6',
    pathname:'react-router-v6'
  }]
}, {
  id: nanoid(),
  title: 'react-redux',
  children: [{
    id: nanoid(),
    title: 'react-redux',
    pathname:'react-redux'
  }]
}]

export default menuList