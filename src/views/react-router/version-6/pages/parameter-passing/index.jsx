/*
 * @Author: your name
 * @Date: 2022-02-19 11:16:11
 * @LastEditTime: 2022-02-19 16:29:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\pages\parameter-passing\index.jsx
 */
import { Link,Outlet } from 'react-router-dom'
const FirstLevelRouting = () => { 
  return (
    <div style={{border:'1px solid #ccc',background:'pink'}}>
      <ul>
        <li>
            <Link to={{pathname:'12'}}>params传参(刷新页面后参数不消失，参数会在地址栏显示)</Link>
          </li>
          <li>
            <Link to={{pathname:'13',query:{id:22,name:'dahuang'}}}>query传参(刷新页面后参数消失)</Link>
          </li>
      </ul>
      <p>一级组件{Math.random()}</p>
      <Outlet></Outlet>
    </div>
  )
}

export default FirstLevelRouting