/*
 * @Author: your name
 * @Date: 2022-02-25 16:36:13
 * @LastEditTime: 2022-02-25 16:42:30
 * @LastEditors: Please set LastEditors
 * @Description: 为每个产品显示一行
 * @FilePath: \react-example\src\views\class-model\react-demo\productRow\index.jsx
 */
import React ,{ Component } from 'react'

export default class ProductRow extends Component{

  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}