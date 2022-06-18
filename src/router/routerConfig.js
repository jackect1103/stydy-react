/*
 * @Author: your name
 * @Date: 2022-02-18 13:25:54
 * @LastEditTime: 2022-02-25 16:04:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\routerConfig.js
 */

import routersPath from './routersPath'

const RouteElement = [
  {
    path: '/',
    children: [
      {
        path: 'react-demo',
        element: <routersPath.ReactDemo />
      },
      {
        path: 'life-cycle',
        element: <routersPath.LifeCycle />
      }
    ]
  },
  {
    path: '/hooks-model',
    children: [
      {
        path: 'react-hooks',
        element: <routersPath.ReactHooks />,
        children: [
          {
            path: 'use-state',
            element: <routersPath.UseState />
          },
          {
            path: 'test-use-state',
            element: <routersPath.TestUseState />
          },
          {
            path: 'use-effect',
            element: <routersPath.UseEffect />
          },
          {
            path: 'use-layout-effect',
            element: <routersPath.UseLayoutEffect />
          },
          {
            path: 'use-ref',
            element: <routersPath.UseRef />
          },
          {
            path: 'use-context',
            element: <routersPath.UseContext />
          },
          {
            path: 'use-reducer',
            element: <routersPath.UseReducer />
          },
          {
            path: 'use-callback',
            element: <routersPath.UseCallback />
          }
        ]
      },
      {
        path: 'shopping-cart-example',
        element: <routersPath.ShoppingCartExample />
      }
    ]
  },
  {
    path: '/react-router-v6',
    element: <routersPath.ReactRouterV6 />,
    children: [
      {
        path: 'parameter-passing',
        element: <routersPath.FirstLevelRouting />,
        children: [{
          path: ':id',
          element: <routersPath.SecondaryRouting />,
          children: [{
            path: ':name',
            element: <routersPath.TertiaryRouting />,
          }]
        }]
      },
      {
        path: 'default-route',
        element: <routersPath.LifeCycle />
      },
      {
        path: 'sub-route',
        element: <routersPath.SubRoute />
      }
    ]
  },
  {
    path: '/react-redux',
    element: <routersPath.ReactRedux />
  },
  {
    path: '/chatRoom-koa',
    element: <routersPath.ChatRoomKoa />
  },
  {
    path: '/*',
    element: <routersPath.Pages_404 />
  }
]
export default RouteElement