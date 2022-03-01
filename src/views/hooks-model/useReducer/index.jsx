/*
 * @Author: your name
 * @Date: 2022-02-22 16:32:38
 * @LastEditTime: 2022-02-25 15:47:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useReducer\index.jsx
 */

// 例子文章eg：https://blog.csdn.net/stone805/article/details/92786377

import { Fragment} from "react";
import { Card } from 'antd';
import Counter from "./useReducerDemo";

const UseReducer = () => {
  return (
    <Fragment>
      <Card style={{ margin:10 }} hoverable>
        <p>个人理解：实际就是将多个数据集中放在一个对象里面，通过reducer方式集中管理,不需要整个组件全都是state</p>
        <p>适用语法：const [state, dispatch] = useReducer(reducer, initState);</p>
        <p>使用场景：</p>
        <ul>
          <li>如果你的state是一个数组或者对象</li>
          <li>如果你的state变化很复杂，经常一个操作需要修改很多state</li>
          <li>如果你希望构建自动化测试用例来保证程序的稳定性</li>
          <li>如果你需要在深层子组件里面去修改一些状态</li>
          <li>如果你用应用程序比较大，希望UI和业务能够分开维护</li>
        </ul>
      </Card>

      <Counter/>
    </Fragment>
  )
}
export default UseReducer