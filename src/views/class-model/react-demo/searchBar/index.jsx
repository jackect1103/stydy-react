/*
 * @Author: your name
 * @Date: 2022-02-25 16:07:55
 * @LastEditTime: 2022-02-25 16:42:47
 * @LastEditors: Please set LastEditors
 * @Description: 接收所有用户输入
 * @FilePath: \react-example\src\views\class-model\react-demo\searchBar\index.jsx
 */
import React ,{ Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.filterText = this.props.filterText
    this.inStockOnly = this.props.inStockOnly
  }

  inputHandle = (e) => {
    console.log('inputHandle', this.filterText,this.inStockOnly)
  }
  render() {
    
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.filterText} 
          onChange={() => this.inputHandle('ss')}/>
        <p>
        <br/>
        <input
          type="checkbox"
          checked={this.inStockOnly} 
          onChange={() => this.inputHandle('ss')}/>
        {' '}
        Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar