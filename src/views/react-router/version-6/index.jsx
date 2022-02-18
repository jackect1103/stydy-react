/*
 * @Author: your name
 * @Date: 2022-02-18 13:13:30
 * @LastEditTime: 2022-02-18 18:01:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\index.jsx
 */
import { Collapse } from 'antd';
import ReactMarkdown from "../../../components/ReactMarkdown";
import './index.css'


const { Panel } = Collapse;
const ReactRouterV6 = () => {
  const md = '```<Switch><Route exact path="/"><Home /></Route>'+
                  '<Route path="/profile"><Profile /></Route>'+
                '</Switch>```'
  return (
    
    <div className="difference">
      <div className="difference-title">react-router-v5版本到react-router-v6版本的主要区别</div>
      <Collapse accordion>
        <Panel header="1、<Switch>重命名为<Routes>" key="1">
          <ReactMarkdown source={md}></ReactMarkdown>
        </Panel>
        <Panel header="2、<Route>的新特性变更" key="2">
          <p>{'<Route>的新特性变更'}</p>
        </Panel>
        <Panel header="3、嵌套路由变得更简单" key="3">
          <p>3、嵌套路由变得更简单</p>
        </Panel>
        <Panel header="4、用useNavigate代替useHistory" key="4">
          <p>{'<Switch>重命名为<Routes>'}</p>
        </Panel>
        <Panel header="5、新钩子useRoutes代替react-router-config" key="5">
          <p>{'<Route>的新特性变更'}</p>
        </Panel>
        <Panel header="6、大小减少：从20kb到8kb" key="6">
          <p>3、嵌套路由变得更简单</p>
        </Panel>
      </Collapse>
    </div>
  )
}

export default ReactRouterV6