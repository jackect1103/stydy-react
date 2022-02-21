/*
 * @Author: your name
 * @Date: 2022-02-21 17:16:11
 * @LastEditTime: 2022-02-21 17:27:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useRef\index.jsx
 */
import React, {Fragment} from 'react'
import { useRef } from 'react'
import { Card } from 'antd';
const UseRef =  () => {
  const curRef = useRef(null)
  console.log('curRef', curRef)
  const handerSubmit = ()=>{
      /*  <div >表单组件</div>  dom 节点 */
      console.log(curRef.current)
  }


  return (
    <Fragment>
      <Card style={{ margin:10 }} hoverable>
        <b>useRef返回一个可变 ref 对象，其.current属性初始化为传递的参数 ( initialValue)。返回的对象将在组件的整个生命周期内持续存在</b>
        <p>const refContainer = useRef(initialValue);</p>
        <b>useRef还有一个很重要的作用就是<i style={{color:'red'}}>缓存数据</i></b>
        <p></p>
      </Card>
      <hr />
      <div>
          {/* ref 标记当前dom节点 */}
          <div ref={curRef} >表单组件</div>
          <button onClick={()=>handerSubmit()} >提交</button> 
      </div>

    </Fragment>
  )
}
export default UseRef