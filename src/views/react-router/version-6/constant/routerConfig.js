/*
 * @Author: your name
 * @Date: 2022-02-18 13:25:54
 * @LastEditTime: 2022-02-19 15:18:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\routerConfig.js
 */

import routersPath from './routersPath'

const RouteElement = [
  {
    path: '/',
    element: <routersPath.LifeCycle />,
    children: [
      {
        path: 'life-cycle',
        element: <routersPath.LifeCycle/>
      }
    ]
  },
  {
    path: '/react-router-v6',
    element: <routersPath.ReactRouterV6 />,
    children: [
      {
        path: 'parameter-passing',
        element: <routersPath.FirstLevelRouting/>,
        children:[{
          path: ':id',
          element: <routersPath.SecondaryRouting/>,
          children:[{
            path: ':name',
            element: <routersPath.TertiaryRouting/>,
          }]
        }]
      },
      {
        path: 'default-route',
        element: <routersPath.LifeCycle/>
      },
      {
        path: 'sub-route',
        element: <routersPath.SubRoute/>
      }
    ]
  },
  {
    path: '/react-redux',
    element: <routersPath.ReactRedux />
  },
  {
    path: '/*',
    element: <routersPath.Pages_404 />
  }
]
export default RouteElement