/*
 * @Author: your name
 * @Date: 2022-02-22 10:08:34
 * @LastEditTime: 2022-02-22 16:12:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useContext\index.jsx
 */

// 文档链接https://blog.csdn.net/MRlaochen/article/details/118928871?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164551100916781685334188%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=164551100916781685334188&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-4-118928871.pc_search_result_control_group&utm_term=usecontext+%E5%AE%9E%E4%BE%8B&spm=1018.2226.3001.4187
import React, {Fragment} from 'react'
import { Card } from 'antd';
import GrandFather from "./demo/grandfather";
const UseContext = () => {

  return (
    <Fragment>
      <Card style={{ margin:10 }} hoverable>
        <h3>作用</h3>
        <p>1、Context 提供了一个无需为每层组件手动添加的 props，就能在组件树间进行数据传递的方法。</p>
        <p>2、Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，</p>
        <h3>使用方法</h3>
        <p>const value = useContext(MyContext);</p>
        <p>1、先使用 createContext 创建一个 Context对象。</p>
        <p>2、再使用 useContext来接收一个 context 对象（React.createContext 的返回值），并返回该 context 的当前值。
          当前的 context 值由上层组件中距离当前组件最近的 (MyContext.Provider标签) 的 value prop决定。</p>
      </Card>

      <h3>例子：</h3>
      <GrandFather/>
    </Fragment>
  )
}

export default UseContext