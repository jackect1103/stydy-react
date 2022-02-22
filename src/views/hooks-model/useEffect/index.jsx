/*
 * @Author: your name
 * @Date: 2022-02-18 11:02:25
 * @LastEditTime: 2022-02-22 14:21:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useEffect\index.jsx
 */
import React, {Fragment,useState,useEffect} from 'react'
import { Card } from 'antd';

// 产品名称列表

const UseEffect = () => {
    let [name,setName] = useState('hjy')
    let [age,setAge] = useState(18)
    useEffect(() => {
      console.log('我修改了年龄', age)
      /* 事件监听 */
      window.addEventListener('resize', handleResize)

      return function(){
        console.log('将要销毁组件')
          window.removeEventListener('resize', handleResize)
      }
    },[age])

    const handleResize = () => {
        console.log('改变页面宽度')
    }
    return (
      <Fragment>
        <Card style={{ margin:10 }} hoverable>
          <b>useEffect使用方式：接收两个参数，第一个副作用回调函数，第二个是监听对象</b>
          <p>个人理解：有点类似vue中的watch监听器.</p>
          <b>执行顺序 组件更新挂载完成 -> 浏览器dom 绘制完成 -> 执行useEffect回调 。</b>
          <p>区别：</p>
          <ul>
            <li>1、如果我们需要在组件<b>初次渲染</b>的时候请求数据，那么useEffect可以充当class组件中的 componentDidMount</li>
            <li>2、如果第二个参数不填写，函数组件每一次更新都会触发effect </li>
            <li>3、每一次<b>state更新</b>，或是<b>props的更新</b>都会触发useEffect执行</li>
            <li>4、每一次执行useEffect，都会先跟之前的监听对象进行比对，判断是否需要触发回调函数</li>
            <li>5、第二个参数数组，可以存放多个监听对象</li>
            <li>6、如果我们需要在组件销毁的阶段，做一些取消dom监听，清除定时器等操作，那么我们可以在useEffect函数第一个参数，
              结尾返回一个函数，用于清除这些副作用。相当于componentWillUnmoun</li>
            <li>7、useEffect是不能直接用 async await 语法糖的</li>
          </ul>
        </Card>
        <hr/>
        <div>
            <p>Math.random：{Math.random()}</p>
            <p>姓名：{name}</p>
            <p>年龄：{age}</p>
            <button onClick={ ()=> setAge(19) } >修改年龄</button>
        </div>
      </Fragment>
    )
}
export default UseEffect