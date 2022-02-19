/*
 * @Author: your name
 * @Date: 2022-02-19 11:03:52
 * @LastEditTime: 2022-02-19 16:27:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\pages\parameter-passing\secondary-routing.jsx
 */
import { Link,Outlet } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom";

const SecondaryRouting = () => {
  let params = useParams();
  console.log('二级路由', params)
  return (
    <div style={{border:'1px solid #ccc',background:'#7FFFAA'}}>
      <ul>
          <li>
            <Link to={{pathname:`Jack`}}>params传参(多个动态参数)</Link>
          </li>
      </ul>
      <p>二级路由{Math.random()}</p>
      <Outlet></Outlet>
    </div>
  )
}

export default SecondaryRouting