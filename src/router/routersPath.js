/*
 * @Author: your name
 * @Date: 2022-02-19 11:06:25
 * @LastEditTime: 2022-02-25 16:06:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\constant\routersPath.js
 */
import ReactDemo from '../views/class-model/react-demo/index'
// 生命周期
import LifeCycle from '../views/class-model/life-cycle/index'

// ReactHooks
import ReactHooks from '../views/hooks-model/index.jsx'
import UseState from "../views/hooks-model/useState/index.jsx";
import TestUseState from "../views/hooks-model/useState/testUsestate.jsx";
import UseEffect from "../views/hooks-model/useEffect/index.jsx";
import UseLayoutEffect from "../views/hooks-model/useLayoutEffect/index.jsx";
import UseRef from "../views/hooks-model/useRef/index.jsx";
import UseContext from "../views/hooks-model/useContext/index.jsx";
import UseReducer from "../views/hooks-model/useReducer/index.jsx";
import UseCallback from "../views/hooks-model/useCallback/index.jsx";

// 购物车例子
import ShoppingCartExample from "../views/hooks-model/shoppingCartExample/index.jsx";

// 路由-v6版本
import ReactRouterV6 from '../views/react-router/version-6/index.jsx'
// 二级路由
import SubRoute from '../views/react-router/version-6/pages/sub-route.jsx'
import FirstLevelRouting from '../views/react-router/version-6/pages/parameter-passing/index.jsx'
import SecondaryRouting from '../views/react-router/version-6/pages/parameter-passing/secondary-routing.jsx'
import TertiaryRouting from '../views/react-router/version-6/pages/parameter-passing/tertiary-routing.jsx'

// 状态管理器
import ReactRedux from '../views/react-redux/index.jsx'

// 聊天室
import ChatRoomKoa from '../views/chatroom-koa/index.jsx'

// 404页面
import Pages_404 from '../views/404'

const routers = {
  ReactDemo,
  // 生命周期
  LifeCycle,
  
  // ReactHooks
  ReactHooks,
  UseState,
  TestUseState,
  UseEffect,
  UseLayoutEffect,
  UseRef,
  UseContext,
  UseReducer,
  UseCallback,
  // 购物车例子
  ShoppingCartExample,

  // 路由-v6版本
  ReactRouterV6,
  // 二级路由
  SubRoute,
  FirstLevelRouting,
  SecondaryRouting,
  TertiaryRouting,

  // 状态管理器
  ReactRedux,

  // 聊天室
  ChatRoomKoa,

  // 404页面
  Pages_404
}

export default routers