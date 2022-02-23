/*
 * @Author: your name
 * @Date: 2022-02-21 15:06:24
 * @LastEditTime: 2022-02-23 10:55:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useState\index.jsx
 */
import { useState } from "react";
import { Card } from 'antd';


const a = 2 
const UseState = () =>{
  /* number为此时state读取值 ，setNumber为派发更新的函数 */
  let [number, setNumber] = useState(0) /* 0为初始值 */

  /*  useState 第一个参数如果是函数 则处理复杂的逻辑 ，返回值为初始值 */
  let [number1, setNumber1] = useState(()=>{
    // number
    return a===1 ? 1 : 2
 }) /* 1为初始值 */

  return (
    <div className="ReactHooks">
      <Card style={{ margin:10 }} hoverable>
        <b>useState 数据存储，派发更新</b>
        <p>useState出现，使得react无状态组件能够像有状态组件一样，可以拥有自己state,useState的参数可以是一个具体的值，也可以是一个函数用于判断复杂的逻辑，函数返回作为初始值，usestate 返回一个数组，</p>
        <p>第一项用于读取此时的state值 ，</p>
        <p>第二项为派发数据更新，组件渲染的函数，函数的参数即是需要更新的值</p>

        <b>注意：useState派发更新函数的执行，就会让整个function组件从头到尾执行一次，所以需要配合useMemo，usecallback等api配合使用</b>
      </Card>
      <hr/>
      <p>Math.random:{Math.random()}</p>
      <p>number：{ number }</p>
      <button onClick={ ()=> {
          setNumber(number+1)
          console.log(number) /* 这里的number是不能够即使改变的  */
        } } >number+1</button>

      <hr/>
      
      <p>{ number1 }</p>
      <button onClick={ ()=>setNumber1(number1+1) } >number1+1</button>

    </div>
  )
}
export default UseState