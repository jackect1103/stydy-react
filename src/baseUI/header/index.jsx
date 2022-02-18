/*
 * @Author: your name
 * @Date: 2022-02-18 10:51:04
 * @LastEditTime: 2022-02-18 15:22:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-example\src\baseUI\header\inex.jsx
 */
import { DingtalkOutlined } from '@ant-design/icons';
import './index.css'

const Header = () => {

  return (
    <div className="header">
      <div className='header-title'>
        <DingtalkOutlined style={{fontSize:'25px'}}/>
        <p className='header-title-text'>自学react框架</p>
      </div>
    </div>
  )
}
export default Header