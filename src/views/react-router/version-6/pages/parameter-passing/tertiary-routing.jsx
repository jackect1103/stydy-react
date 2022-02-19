/*
 * @Author: your name
 * @Date: 2022-02-19 11:04:26
 * @LastEditTime: 2022-02-19 16:26:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\react-router\version-6\pages\parameter-passing\tertiary-routing.jsx
 */
import { useNavigate, useParams } from "react-router-dom";
const TertiaryRouting = () => {
  let params = useParams();
  console.log('三级路由', params)
    return (
      <div style={{border:'1px solid #ccc',background:'skyblue'}}>
        三级路由{Math.random()}
      </div> 
      
    )
}

export default TertiaryRouting