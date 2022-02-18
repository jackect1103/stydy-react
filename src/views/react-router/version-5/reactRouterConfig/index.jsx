/*
 * @Author: your name
 * @Date: 2022-02-18 10:38:23
 * @LastEditTime: 2022-02-18 11:19:57
 * @LastEditors: Please set LastEditors
 * @Description: React Router Config（React 集中配置式路由）
 * @FilePath: \react-example\src\baseUI\react Router Config\index.js
 */
import routerConfig from './routePathFile'
console.log('routerConfig', routerConfig.application)
const routes = [
  // {
  //   path: "/",
  //   component: routerConfig.application
  // },
  {
    path: "/useEffectExample",
    component: routerConfig.UseEffectExample,
    routes: [
      {
        path: "/child/:id/grand-child",
        // component: GrandChild
      }
    ]
  }
];

export default routes