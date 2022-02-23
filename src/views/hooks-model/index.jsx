/*
 * @Author: your name
 * @Date: 2022-02-21 14:31:55
 * @LastEditTime: 2022-02-23 09:15:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\index.jsx
 */
import { Link ,Outlet} from "react-router-dom";
import './index.css'

const ReactHooks = () =>{
  return (
    <div className="ReactHooks">
      <h3>Hooks 是一项新功能提案，可让您在不编写类的情况下使用 state(状态) 和其他 React 功能</h3>
      <b>Hook 使用规则</b> 
      <p>1、只能在函数最外层调用 Hook。不要在循环、条件判断或者嵌套函数（子函数）中调用。</p>
      <p>2、只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用</p>
      <p>3、在多个useState()调用中，渲染之间的调用顺序必须相同。</p>
      <p>以下就是react-hooks主要的api,接下来我会和大家分享一下这些api的用法，以及使用他们的注意事项。</p>
      <ul>
        <li><Link to="use-state">1、useState</Link></li>
        <li><Link to="use-effect">2、useEffect</Link></li>
        <li><Link to="use-layout-effect">3、useLayoutEffect</Link></li>
        <li><Link to="use-ref">4、useRef</Link></li>
        <li><Link to="use-context">5、useContext</Link></li>
        <li><Link to="use-reducer">6、useReducer </Link></li>
      </ul>
      <hr/>
      <Outlet></Outlet>
    </div>
  )
}
export default ReactHooks