/*
 * @Author: your name
 * @Date: 2022-01-15 09:27:16
 * @LastEditTime: 2022-01-15 10:51:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\article\idnex.js
 */

import React,{useState} from 'react'
import {useParams} from 'react-router-dom'


export default function Article(props){
  const data = useParams();
  const [count, setCount] = useState(0)
  console.log('参数：', data,props)

  const increate = () => {
    setCount(count + 1)
  }

  function decreate(){
    setCount(count - 1)
  }
  return(
    <div>
      <p>当前数字为：{count}</p>
      <button onClick={increate}>加1</button>
      <button onClick={decreate}>减1</button>
    </div>
  )
}