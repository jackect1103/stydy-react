/*
 * @Author: your name
 * @Date: 2021-12-13 15:46:22
 * @LastEditTime: 2022-01-14 13:16:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\App.js
 */
import './App.css';
import Home from './views'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
