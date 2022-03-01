/*
 * @Author: your name
 * @Date: 2022-02-25 16:34:31
 * @LastEditTime: 2022-02-25 16:46:55
 * @LastEditors: Please set LastEditors
 * @Description:根据用户输入显示和过滤数据集合
 * @FilePath: \react-example\src\views\class-model\react-demo\productTable\index.jsx
 */
import React ,{ Component } from 'react'
import ProductCategoryRow from "../productCategoryRow/index";
import ProductRow from "../productRow/index";

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}


export default ProductTable