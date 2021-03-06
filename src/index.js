/*
 * @Author: your name
 * @Date: 2021-12-13 15:46:22
 * @LastEditTime: 2022-02-18 11:10:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import App from './App';
import axios from './utils/axios'
import { Provider } from 'react-redux'
import store from './store/index.js'

React.Component.prototype.$axios = axios
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
