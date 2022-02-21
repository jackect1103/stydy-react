/*
 * @Author: your name
 * @Date: 2022-02-21 14:31:55
 * @LastEditTime: 2022-02-21 17:18:07
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
      <p>以下就是react-hooks主要的api,接下来我会和大家分享一下这些api的用法，以及使用他们的注意事项。</p>
      <ul>
        <li><Link to="use-state">1、useState</Link></li>
        <li><Link to="use-effect">2、useEffect</Link></li>
        <li><Link to="use-layout-effect">3、useLayoutEffect</Link></li>
        <li><Link to="use-ref">4、useReft</Link></li>
      </ul>
      <hr/>
      <Outlet></Outlet>
    </div>
  )
}
export default ReactHooks