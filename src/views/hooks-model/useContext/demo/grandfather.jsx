/*
 * @Author: your name
 * @Date: 2022-02-22 16:09:31
 * @LastEditTime: 2022-02-22 16:17:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\views\hooks-model\useContext\demo\grandfather.jsx
 */
import React,{useState} from 'react';
import DemoContext from './DemoContext'
import Father from './father'

const GrandFather = () => {
    const [ num , setNum ] = useState(0)
    const handleAddClick = () => {
        setNum(num => num + 1)
    }
    const handleSubClick = () => {
        setNum(num => num - 1)
    }
    return (
    	console.log('爷爷组件'),
        <div style={{backgroundColor:'yellow'}}>
            <h1 >爷爷组件</h1>
            <DemoContext.Provider value={{num , handleAddClick , handleSubClick}}>
                {num} <br/>
                <Father></Father>
            </DemoContext.Provider>
        </div>
    );
};

export default GrandFather;
