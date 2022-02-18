<!--
 * @Author: your name
 * @Date: 2021-12-13 15:46:22
 * @LastEditTime: 2022-02-18 11:28:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\README.md
-->

## 路由版本区别
[React-Router v6 新特性解读及迁移指南](https://www.jianshu.com/p/d8ee8311df6d)

```js
1、<Switch>重命名为<Routes>。
// v5
<Switch>
    <Route exact path="/"><Home /></Route>
    <Route path="/profile"><Profile /></Route>
</Switch>

// v6
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="profile/*" element={<Profile />} />
</Routes>

2、<Route>的新特性变更。
// v5
<Route path=":userId" component={Profile} />
<Route
  path=":userId" render={routeProps => (
    <Profile routeProps={routeProps} animate={true} />
  )}
/>

// v6
<Route path=":userId" element={<Profile />} />
<Route path=":userId" element={<Profile animate={true} />} />

3、嵌套路由变得更简单。
  <Route children> 已更改为接受子路由。
  比<Route exact>和<Route strict>更简单的匹配规则。
  <Route path> 路径层次更清晰。

4、用useNavigate代替useHistory。

5、新钩子useRoutes代替react-router-config。

6、大小减少：从20kb到8kb
```