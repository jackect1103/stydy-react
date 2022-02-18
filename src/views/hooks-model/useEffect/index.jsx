/*
 * @Author: your name
 * @Date: 2022-02-18 11:02:25
 * @LastEditTime: 2022-02-18 14:18:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useEffect\index.jsx
 */
import React, {Fragment} from 'react'
import { useState } from 'react'

// 产品名称列表
const nameList = ['apple', 'peer', 'banana', 'lemon']

const UseEffectExample = (props) => {
    // 产品名称、价格
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('apple')
  
    // 假设有一个业务函数  获取产品的名字
    function getProductName() {
        console.log('getProductName触发')
        return name
    }

    return (
        <Fragment>
            <p>{name}</p>
            <p>{price}</p>
            <p>{getProductName()}</p>
            <button onClick={() => setPrice(price+1)}>价钱+1</button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
        </Fragment>
    )
}
export default UseEffectExample