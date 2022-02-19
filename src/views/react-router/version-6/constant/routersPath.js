/*
 * @Author: your name
 * @Date: 2022-02-19 11:06:25
 * @LastEditTime: 2022-02-19 15:58:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\constant\routersPath.js
 */
import LifeCycle from '../../../class-model/life-cycle/index'
import ReactRouterV6 from '../index.jsx'
import ReactRedux from '../../../react-redux/index.jsx'

import SubRoute from '../pages/sub-route'
import FirstLevelRouting from '../pages/parameter-passing/index.jsx'
import SecondaryRouting from '../pages/parameter-passing/secondary-routing'
import TertiaryRouting from '../pages/parameter-passing/tertiary-routing'

import Pages_404 from '../../../404'

const routers = {
  // 生命周期
  LifeCycle,
  
  // 路由-v6版本
  ReactRouterV6,

  // 状态管理器
  ReactRedux,

  // 二级路由
  SubRoute,
  FirstLevelRouting,
  SecondaryRouting,
  TertiaryRouting,

  // 404页面
  Pages_404
}

export default routers