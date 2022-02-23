/*
 * @Author: your name
 * @Date: 2022-02-23 10:59:52
 * @LastEditTime: 2022-02-23 11:09:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useReducer\useReducerDemo.jsx
 */
import { useReducer } from "react";

const Counter = () => {
  // 第一个参数：应用的初始化
  const initialState = { count: 0 };
  // 第二个参数：state的reducer处理函数
  function reducer(state, action) {
    console.log('state, action', state, action)
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  // 返回值：最新的state和dispatch函数
  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <>
      {/* useReducer会根据dispatch的action，返回最终的state，并触发rerender */}
      <p>Count: {state.count}</p>
      {/* dispatch 用来接收一个 action参数「reducer中的action」，用来触发reducer函数，更新最新的状态 */}
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </>
  )
}

export default Counter