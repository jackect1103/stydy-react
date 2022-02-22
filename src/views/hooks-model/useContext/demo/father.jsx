/*
 * @Author: your name
 * @Date: 2022-02-22 16:10:02
 * @LastEditTime: 2022-02-22 16:17:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useContext\demo\father.jsx
 */
import React from 'react';
import Son from './son'
const Father = () => {
    return (
      console.log('爸爸组件'),
        <div style={{backgroundColor:'yellowGreen'}}>
            <h2>爸爸组件</h2>
            <div>
                <Son></Son>
            </div>
        </div>
    );
};

export default Father;
