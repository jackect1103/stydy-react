/*
 * @Author: your name
 * @Date: 2022-02-18 11:02:25
 * @LastEditTime: 2022-02-21 17:16:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useEffect\index.jsx
 */
import React, {Fragment} from 'react'
import { useEffect,useLayoutEffect } from 'react'
import { Card } from 'antd';

// 产品名称列表

const UseEffect = () => {
    useLayoutEffect(() => {
      console.log('执行了：useLayoutEffect')
    }, []);

    useEffect(() => {
      console.log('执行了：useEffect')
    },[])


    return (
      
      <Fragment>
        <Card style={{ margin:10 }} hoverable>
          <b>useLayoutEffect使用方式：接收两个参数，第一个副作用回调函数，第二个是监听对象</b>
          <p>个人理解：有点类似vue中的watch监听器.</p>
          <b>useLayoutEffect 执行顺序 组件更新挂载完成 -> 执行useLayoutEffect回调-> 浏览器dom 绘制完成</b>

        </Card>
        <hr/>
        <div>
            <p>Math.random：{Math.random()}</p>
        </div>
      </Fragment>
    )
}
export default UseEffect