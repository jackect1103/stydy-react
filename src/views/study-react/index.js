/*
 * @Author: your name
 * @Date: 2022-01-14 08:57:29
 * @LastEditTime: 2022-02-18 09:58:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\user-manager\index.js
 */
import React, {Fragment} from 'react'
import { useState, useMemo } from 'react'
import '../index.css'
// 产品名称列表
const nameList = ['apple', 'peer', 'banana', 'lemon']

const UserManager = (props) => {
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
            <div>
              <p>{name}</p>
              <p>{price}</p>
              <p>{getProductName()}</p>
              <button className='button' onClick={() => setPrice(price+1)}>价钱+1 {Math.random()}</button>
              <button className='button' onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
            </div>
        </Fragment>
    )
}

export default UserManager