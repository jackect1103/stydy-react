/*
 * @Author: your name
 * @Date: 2022-02-18 10:12:40
 * @LastEditTime: 2022-02-25 16:03:36
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
    title: '文档demo例子',
    pathname:'react-demo'
  },{
    id: nanoid(),
    title: '生命周期',
    pathname:'life-cycle'
  }]
},  {
  id: nanoid(),
  title: 'hooks模式',
  children: [{
    id: nanoid(),
    title: 'react-hooks模式',
    pathname:'hooks-model/react-hooks'
  },{
    id: nanoid(),
    title: '购物车例子',
    pathname:'hooks-model/shopping-cart-example',
  }, ]
},{
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