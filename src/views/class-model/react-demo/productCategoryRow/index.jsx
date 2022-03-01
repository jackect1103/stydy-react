/*
 * @Author: your name
 * @Date: 2022-02-25 16:35:43
 * @LastEditTime: 2022-02-25 16:42:22
 * @LastEditors: Please set LastEditors
 * @Description: 显示每个类别的标题
 * @FilePath: \react-example\src\views\class-model\react-demo\productCategoryRow\index.jsx
 */
import React ,{ Component } from 'react'

export default class ProductCategoryRow extends Component{

  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}