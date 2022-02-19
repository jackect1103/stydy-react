/*
 * @Author: your name
 * @Date: 2022-02-19 08:54:50
 * @LastEditTime: 2022-02-19 09:06:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\constant\routerConstant.js
 */
export const VERSION_CHANGE = [{
  id:0,
  name:'<Switch>重命名为<Routes>',
  code:`
        // v5
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/profile"><Profile /></Route>
        </Switch>
        
        // v6
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/*" element={<Profile />} />
        </Routes>`
},{
  id:1,
  name:'<Route>的新特性变更',
  code:`
        component/render被element替代
        // v5
        <Route path=":userId" component={Profile} />
        <Route path=":userId" render={routeProps => (
            <Profile routeProps={routeProps} animate={true} />
          )}
        />
        
        // v6
        <Route path=":userId" element={<Profile />} />
        <Route path=":userId" element={<Profile animate={true} />} />`
},{
  id:2,
  name:'嵌套路由变得更简单',
  code:`
        1、<Route children> 已更改为接受子路由。
        2、比<Route exact>和<Route strict>更简单的匹配规则。
        3、<Route path> 路径层次更清晰。`
},{
  id:3,
  name:'用useNavigate代替useHistory',
  code:`
      // v5
      import { useHistory } from 'react-router-dom';
      const history = useHistory()
      history.push('/index1')
      history.replace('/index2')

      // v6
      import { useNavigate } from 'react-router-dom';
      const navigate = useNavigate();
      navigate('/index1')
      navigate('/index2', {replace: true})`
},{
  id:4,
  name:'新钩子useRoutes代替react-router-config。',
  code:``
}]

