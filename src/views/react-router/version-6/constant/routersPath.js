/*
 * @Author: your name
 * @Date: 2022-02-19 11:06:25
 * @LastEditTime: 2022-02-22 16:32:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\constant\routersPath.js
 */
import LifeCycle from '../../../class-model/life-cycle/index'

import ReactHooks from '../../../hooks-model/index.jsx'
import UseState from "../../../hooks-model/useState/index.jsx";
import UseEffect from "../../../hooks-model/useEffect/index.jsx";
import UseLayoutEffect from "../../../hooks-model/useLayoutEffect/index.jsx";
import UseRef from "../../../hooks-model/useRef/index.jsx";
import UseContext from "../../../hooks-model/useContext/index.jsx";
import UseReducer from "../../../hooks-model/useReducer/index.jsx";

import ReactRouterV6 from '../index.jsx'
import SubRoute from '../pages/sub-route'
import FirstLevelRouting from '../pages/parameter-passing/index.jsx'
import SecondaryRouting from '../pages/parameter-passing/secondary-routing'
import TertiaryRouting from '../pages/parameter-passing/tertiary-routing'

import ReactRedux from '../../../react-redux/index.jsx'

import Pages_404 from '../../../404'

const routers = {
  // 生命周期
  LifeCycle,
  
  // ReactHooks
  ReactHooks,
  UseState,
  UseEffect,
  UseLayoutEffect,
  UseRef,
  UseContext,
  UseReducer,

  // 路由-v6版本
  ReactRouterV6,
  // 二级路由
  SubRoute,
  FirstLevelRouting,
  SecondaryRouting,
  TertiaryRouting,

  // 状态管理器
  ReactRedux,

  // 404页面
  Pages_404
}

export default routers