/*
 * @Author: your name
 * @Date: 2022-02-18 13:25:54
 * @LastEditTime: 2022-02-18 15:51:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\routerConfig.js
 */
import LifeCycle from '../../class-model/life-cycle/index'
import ReactRouterV6 from '../../react-router/version-6/index.jsx'
import ReactRedux from '../../react-redux/index.jsx'

const RouteElement = [
  {
    path: '/',
    element: <LifeCycle />,
    children: [
      {
        path: 'life-cycle',
        element: <LifeCycle/>
      }
    ]
  },
  {
    path: '/react-router-v6',
    element: <ReactRouterV6 />
  },
  {
    path: '/react-redux',
    element: <ReactRedux />
  }
]
export default RouteElement