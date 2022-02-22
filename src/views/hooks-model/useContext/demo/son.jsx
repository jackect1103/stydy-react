/*
 * @Author: your name
 * @Date: 2022-02-22 16:10:26
 * @LastEditTime: 2022-02-22 16:15:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useContext\demo\son.jsx
 */
import React ,{useContext}from 'react';
import DemoContext from './DemoContext'

const Demo3 = () => {
    const aaa = useContext(DemoContext)
    console.log('111',aaa ) // 111 {num: 0, handleAddClick: ƒ, handleSubClick: ƒ}
    return (
    	console.log('儿子组件',aaa ),
        <div style={{backgroundColor:'pink'}}>
            <h3>儿子组件</h3>
            <div>
                <button onClick={aaa.handleSubClick}>-</button>
                {aaa.num}
                <button onClick={aaa.handleAddClick}>+</button>
            </div>
        </div>
    );
};

export default Demo3;
