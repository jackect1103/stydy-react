/*
 * @Author: your name
 * @Date: 2022-02-25 16:05:13
 * @LastEditTime: 2022-02-25 16:42:54
 * @LastEditors: Please set LastEditors
 * @Description: 包含整个示例
 * @FilePath: \react-example\src\views\class-model\react-demo\index.jsx
 */

import React  from "react";
import { Card } from 'antd';
import SearchBar from "./searchBar/index";
import ProductTable from "./productTable/index";


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  render() {
    return (
        <Card style={{ margin:10 }} hoverable>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
          <ProductTable
            products={PRODUCTS}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </Card>
    );
  }
}
export default FilterableProductTable