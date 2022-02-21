/*
 * @Author: your name
 * @Date: 2022-02-18 13:13:30
 * @LastEditTime: 2022-02-21 16:22:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\index.jsx
 */
import { Link,Outlet } from 'react-router-dom'
import { Collapse } from 'antd';
import ReactMarkdown from "../../../components/ReactMarkdown";
import './index.css'
import {VERSION_CHANGE } from "./constant/routerConstant";

const { Panel } = Collapse;
const ReactRouterV6 = () => {
  return (
    <div className="difference">
      <div className="difference-title">react-router-v5版本到react-router-v6版本的主要区别</div>
      <Collapse accordion>
        {
          VERSION_CHANGE.map(item => {
              return (
                <Panel header={item.name} key={item.id}>
                  <ReactMarkdown source={item.code}></ReactMarkdown>
                </Panel>
              )
          })
        }
        
      </Collapse>
      <p className='example'>例子测试：</p>
      <ul>
        <li><Link to="parameter-passing">1、参数传递</Link></li>
        <li><Link to="default-route">2、默认路由</Link></li>
        <li><Link to="sub-route">3、子路由</Link></li>
      </ul>
      <hr/>
      <Outlet></Outlet>
    </div>
  )
}

export default ReactRouterV6